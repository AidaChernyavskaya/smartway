import React, {useState} from 'react';
import styles from './SortFilter.module.css'
import ArrowDown from '../../../static/arrow_down.svg';
import cn from "classnames";
import {observer} from "mobx-react-lite";
import sortValueStore from "../../stores/SortValueStore";
import {sortFields, SortingVariable, sortOrder} from "../../../types";

// const sortTypes: Sort[] = ['stars', 'forks', 'updated'];

const sortingVariables: SortingVariable[] = [
    {sortField: sortFields.stars, sortOrder: sortOrder.desc, text: 'Most stars'},
    {sortField: sortFields.forks, sortOrder: sortOrder.desc, text: 'Most forks'},
    {sortField: sortFields.updated, sortOrder: sortOrder.desc, text: 'New first'},
    {sortField: sortFields.updated, sortOrder: sortOrder.asc, text: 'Old first'},
]

const SortFilter = observer(() => {
    const {sortValue, setSortValue, order, setOrder} = sortValueStore;
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