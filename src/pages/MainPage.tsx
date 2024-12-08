import React from 'react';
import SearchField from "../components/library/SearchField/SearchField";
import RepositoriesListLayout from "../components/layout/RepositoriesListLayout/RepositoriesListLayout";
import SortFieldLayout from "../components/layout/SortFieldLayout/SortFieldLayout";
import {observer} from "mobx-react-lite";
import repositoriesStore from "../stores/RepositoriesStore";

const MainPage = observer(() => {
    return (
        <div className={'container'}>
            <SearchField/>
            <SortFieldLayout text={'Result'} count={repositoriesStore.totalCount}/>
            <RepositoriesListLayout/>
        </div>
    );
});

export default MainPage;