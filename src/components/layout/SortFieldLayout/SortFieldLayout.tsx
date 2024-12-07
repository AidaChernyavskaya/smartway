import React from 'react';
import repositoriesStore from "../../stores/RepositoriesStore";
import SortFilter from "../../library/SortFilter/SortFilter";
import {observer} from "mobx-react-lite";
import styles from './SortFieldLayout.module.css';

const SortFieldLayout = observer(() => {
    const totalCount = repositoriesStore.totalCount;

    if (totalCount === 0) {
        return <></>
    }

    return (
        <div className={styles.repos_info}>
            <h2 className={styles.result}>Result: {totalCount} repositories</h2>
            <SortFilter/>
        </div>
    );
});

export default SortFieldLayout;