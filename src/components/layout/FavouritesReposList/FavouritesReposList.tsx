import React from 'react';
import favouritesStore from "../../../stores/FavouritesStore";
import RepoCardMini from "../../library/RepoCardMini/RepoCardMini";
import styles from './FavouritesReposList.module.css'
import {observer} from "mobx-react-lite";
import sortValueStore from "../../../stores/SortValueStore";

const FavouritesReposList = observer(() => {
    const {sortValue, order} = sortValueStore;

    return (
        <div className={styles.repos_container}>
            {favouritesStore.sortData(sortValue, order).map((repo) => (
                <RepoCardMini repo={repo} key={repo.id}/>
            ))}
        </div>
    );
});

export default FavouritesReposList;