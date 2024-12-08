import React, {FC} from 'react';
import repositoriesStore from "../../stores/RepositoriesStore";
import SortFilter from "../../library/SortFilter/SortFilter";
import {observer} from "mobx-react-lite";
import styles from './SortFieldLayout.module.css';
import favouritesStore from "../../stores/FavouritesStore";

interface SortFieldLayout {
    showed: 'all' | 'favs';
}

const SortFieldLayout: FC<SortFieldLayout> = observer(({showed}) => {
    const totalCount = showed === 'all' ? repositoriesStore.totalCount : favouritesStore.totalAmount;

    return (
        <div className={styles.repos_info}>
            <h2 className={styles.result}>{showed === 'all' ? 'Result' : 'Favourites'}: {totalCount} repositories</h2>
            <SortFilter/>
        </div>
    );
});

export default SortFieldLayout;