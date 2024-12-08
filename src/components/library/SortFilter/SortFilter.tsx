import React, {useState} from 'react';
import styles from './SortFilter.module.css'
import ArrowDown from '../../../static/arrow_down.svg';
import cn from "classnames";
import {observer} from "mobx-react-lite";
import sortValueStore from "../../stores/SortValueStore";
import {SortFields, SortingVariable, SortOrder} from "../../../types";

const sortingVariables: SortingVariable[] = [
    {sortField: SortFields.stars, sortOrder: SortOrder.desc, text: 'Most stars'},
    {sortField: SortFields.forks, sortOrder: SortOrder.desc, text: 'Most forks'},
    {sortField: SortFields.updated, sortOrder: SortOrder.desc, text: 'New first'},
    {sortField: SortFields.updated, sortOrder: SortOrder.asc, text: 'Old first'},
]

const SortFilter = observer(() => {
    const {setSortValue, setOrder} = sortValueStore;
    const [sortType, setSortType] = useState('Most stars');
    const [isOpen, setIsOpen] = useState(false);


    const setSortProperty = (property: SortingVariable) => {
        setSortValue(property.sortField);
        setOrder(property.sortOrder);
        setSortType(property.text);
        setIsOpen(false);
    }

    return (
        <div className={styles.sort_container}>
            <button className={cn(styles.sort, isOpen && styles.is_open)} onClick={() => setIsOpen((prev) => !prev)}>
                <p className={styles.sort_name}>{sortType}</p>
                <img src={ArrowDown} alt={''} className={styles.sort_img}/>
            </button>
            {isOpen &&
                <ul className={styles.variants}>
                    {
                        sortingVariables.map((item, index) => (
                            <li
                                className={styles.variants_item}
                                onClick={() => setSortProperty(item)} key={`sortType${index}`}
                            >
                                {item.text}
                            </li>
                        ))
                    }
                </ul>
            }
        </div>
    );
});

export default SortFilter;