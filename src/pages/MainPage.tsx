import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import repositoriesStore from "../components/stores/RepositoriesStore";
import RepoCardMini from "../components/repositories/RepoCardMini/RepoCardMini";
import SearchField from "../components/library/SearchField/SearchField";
import searchValueStore from "../components/stores/SearchValueStore";
import sortValueStore from "../components/stores/SortValueStore";
import SortFieldLayout from "../components/layout/SortFieldLayout/SortFieldLayout";

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

            <div className={'pagination'}>
                <button
                    className={'button_colored'} onClick={() => repositoriesStore.prevPage(searchValue, sortValue, order)}
                    disabled={repositoriesStore.currentPage === 1}
                >
                    Prev
                </button>
                <p className={'pages'}>page {repositoriesStore.currentPage} from {repositoriesStore.totalPages}</p>
                <button
                    className={'button_colored'} onClick={() => repositoriesStore.nextPage(searchValue, sortValue, order)}
                    disabled={repositoriesStore.currentPage  === repositoriesStore.totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
});

export default MainPage;