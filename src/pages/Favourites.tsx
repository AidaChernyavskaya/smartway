import React from 'react';
import {observer} from "mobx-react-lite";
import ButtonBack from "../components/library/ButtonBack/ButtonBack";
import favouritesStore from "../components/stores/FavouritesStore";
import RepoCardMini from "../components/library/RepoCardMini/RepoCardMini";
import SortFieldLayout from "../components/layout/SortFieldLayout/SortFieldLayout";
import sortValueStore from "../components/stores/SortValueStore";

const Favourites = observer(() => {
    const {sortValue, order} = sortValueStore;

    return (
        <div className={'container'}>
            <ButtonBack/>
            <SortFieldLayout showed={'favs'}/>
            <div className={'repos_container'}>
                {favouritesStore.sortData(sortValue, order).map((repo) => (
                    <RepoCardMini repo={repo} key={repo.id}/>
                ))}
            </div>
        </div>
    );
});

export default Favourites;