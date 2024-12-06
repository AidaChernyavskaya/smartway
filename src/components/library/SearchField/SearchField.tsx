import React, {useState} from 'react';
import styles from './SearchField.module.css';

const SearchField = () => {
    const [searchValue, setSearchValue] = useState('')

    return (
        <input
            type={"text"} placeholder={'Search'} className={styles.search}
            value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
        />
    );
};

export default SearchField;