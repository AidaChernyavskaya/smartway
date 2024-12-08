import React from 'react';
import {observer} from "mobx-react-lite";
import ButtonBack from "../components/library/ButtonBack/ButtonBack";
import SortFieldLayout from "../components/layout/SortFieldLayout/SortFieldLayout";
import FavouritesReposList from "../components/layout/FavouritesReposList/FavouritesReposList";
import favouritesStore from "../stores/FavouritesStore";

const Favourites = observer(() => {
    return (
        <div className={'container'}>
            <ButtonBack/>
            <SortFieldLayout text={'Favourites'} count={favouritesStore.totalAmount}/>
            <FavouritesReposList/>
        </div>
    );
});

export default Favourites;