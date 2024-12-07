import React from 'react';
import styles from './SearchField.module.css';
import searchValueStore from "../../stores/SearchValue";
import {observer} from "mobx-react-lite";

const SearchField = observer(() => {
    const {searchValue, setSearchValue} = searchValueStore;

    return (
        <input
            type={"text"} placeholder={'Search'} className={styles.search}
            value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
        />
    );
});

export default SearchField;