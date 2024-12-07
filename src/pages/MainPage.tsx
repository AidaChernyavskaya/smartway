import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import repositoriesStore from "../components/stores/RepositoriesStore";
import RepoCardMini from "../components/repositories/RepoCardMini/RepoCardMini";
import SearchField from "../components/library/SearchField/SearchField";
import searchValueStore from "../components/stores/SearchValueStore";
import sortValueStore from "../components/stores/SortValueStore";
import SortFieldLayout from "../components/layout/SortFieldLayout/SortFieldLayout";
import PaginationButtons from "../components/layout/PaginationButtons/PaginationButtons";

const MainPage = observer(() => {
    const searchValue = searchValueStore.searchValue;
    const sortValue = sortValueStore.sortValue;
    const order = sortValueStore.order;

    useEffect(() => {
        let timerId = setTimeout(() => {
            repositoriesStore.fetchRepositories(searchValue, sortValue, order);
        }, 1000)
        return () => clearTimeout(timerId);
    }, [searchValue, sortValue, order]);

    // if (repositoriesStore.isLoading) {
    //     return <div>Загрузка...</div>;
    // }

    if (repositoriesStore.error) {
        return <div>Ошибка: {repositoriesStore.error}</div>;
    }

    return (
        <div className={'container'}>
            <SearchField/>
            <SortFieldLayout/>

            <div className={'repos'}>
                {repositoriesStore.repositories.map((repo) => (
                    <RepoCardMini repo={repo} key={repo.id}/>
                ))}
            </div>

            <PaginationButtons/>
        </div>
    );
});

export default MainPage;