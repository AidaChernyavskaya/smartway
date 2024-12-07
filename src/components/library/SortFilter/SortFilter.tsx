import React, {useState} from 'react';
import styles from './SortFilter.module.css'
import ArrowDown from '../../../static/arrow_down.svg';
import cn from "classnames";
import {observer} from "mobx-react-lite";
import sortValueStore from "../../stores/SortValueStore";
import {Sort} from "../../../types";

const sortTypes: Sort[] = ['stars', 'forks', 'updated'];

const SortFilter = observer(() => {
    const {sortValue, setSortValue} = sortValueStore;
    // const [sortType, setSortType] = useState('stars');
    const [isOpen, setIsOpen] = useState(false);


    const setSortProperty = (property: Sort) => {
        setSortValue(property);
        setIsOpen(false);
    }

    return (
        <div className={styles.sort_container}>
            <button className={cn(styles.sort, isOpen && styles.is_open)} onClick={() => setIsOpen((prev) => !prev)}>
                <p className={styles.sort_name}>By {sortValue}</p>
                <img src={ArrowDown} alt={''} className={styles.sort_img}/>
            </button>
            {isOpen &&
                <ul className={styles.variants}>
                    {
                        sortTypes.map((item, index) => (
                            <li
                                className={styles.variants_item}
                                onClick={() => setSortProperty(item)} key={`sortType${index}`}
                            >
                                By {item}
                            </li>
                        ))
                    }
                </ul>
            }
        </div>
    );
});

export default SortFilter;