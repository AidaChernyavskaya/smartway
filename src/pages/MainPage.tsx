import React from 'react';
import SearchField from "../components/library/SearchField/SearchField";
import RepositoriesListLayout from "../components/layout/RepositoriesListLayout/RepositoriesListLayout";
import SortFieldLayout from "../components/layout/SortFieldLayout/SortFieldLayout";

const MainPage = () => {
    return (
        <div className={'container'}>
            <SearchField/>
            <SortFieldLayout/>
            <RepositoriesListLayout/>
        </div>
    );
};

export default MainPage;