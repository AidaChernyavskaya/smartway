import React from 'react';
import {observer} from "mobx-react-lite";
import ButtonBack from "../components/library/ButtonBack/ButtonBack";
import favouritesStore from "../components/stores/FavouritesStore";
import RepoCardMini from "../components/library/RepoCardMini/RepoCardMini";
import SortFilter from "../components/library/SortFilter/SortFilter";
import SortFieldLayout from "../components/layout/SortFieldLayout/SortFieldLayout";

const Favourites = observer(() => {
    return (
        <div className={'container'}>
            <ButtonBack/>
            <SortFieldLayout showed={'favs'}/>
            <div className={'repos_container'}>
                {favouritesStore.favourites.map((repo) => (
                    <RepoCardMini repo={repo} key={repo.id}/>
                ))}
            </div>
        </div>
    );
});

export default Favourites;