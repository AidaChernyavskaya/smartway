import React from 'react';
import SearchField from "../components/library/SearchField/SearchField";
import RepositoriesListLayout from "../components/layout/RepositoriesListLayout/RepositoriesListLayout";

const MainPage = () => {
    return (
        <div className={'container'}>
            <SearchField/>
            <RepositoriesListLayout/>
        </div>
    );
};

export default MainPage;