import React, {useState} from 'react';
import styles from './SortFilter.module.css'
import ArrowDown from '../../../static/arrow_down.svg';
import cn from "classnames";

const SortFilter = () => {
    const [sortType, setSortType] = useState('stars');
    const [isOpen, setIsOpen] = useState(false);

    const items = ['stars', 'forks', 'latest'];

    const setSortProperty = (property: string) => {
        setSortType(property);
        setIsOpen(false);
    }

    return (
        <div className={styles.sort_container}>
            <button className={cn(styles.sort, isOpen && styles.is_open)} onClick={() => setIsOpen((prev) => !prev)}>
                <p className={styles.sort_name}>By {sortType}</p>
                <img src={ArrowDown} alt={''} className={styles.sort_img}/>
            </button>
            {isOpen &&
                <ul className={styles.variants}>
                    {
                        items.map((item, index) => (
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
};

export default SortFilter;