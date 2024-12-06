import React from 'react';
import RepoCardMini from "../components/repositories/RepoCardMini/RepoCardMini";
import RepoCardDetailed from "../components/repositories/RepoCardDetailed/RepoCardDetailed";

const MainPage = () => {
    return (
        <div className={'container'}>
            MainPage
            <RepoCardDetailed/>
        </div>
    );
};

export default MainPage;