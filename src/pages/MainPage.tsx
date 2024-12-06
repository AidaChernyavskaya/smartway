import React from 'react';
import RepoCardMini from "../components/repositories/RepoCardMini/RepoCardMini";
import RepoCardDetailed from "../components/repositories/RepoCardDetailed/RepoCardDetailed";
import ButtonBack from "../components/library/ButtonBack/ButtonBack";
import SearchField from "../components/library/SearchField/SearchField";
import SortFilter from "../components/library/SortFilter/SortFilter";

const MainPage = () => {
    return (
        <div className={'container'}>
            MainPage
            <RepoCardDetailed/>
        </div>
    );
};

export default MainPage;