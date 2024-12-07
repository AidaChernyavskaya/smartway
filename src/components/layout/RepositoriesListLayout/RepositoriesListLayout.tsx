import React, {useEffect} from 'react';
import repositoriesStore from "../../stores/RepositoriesStore";
import RepoCardMini from "../../library/RepoCardMini/RepoCardMini";
import styles from './RepositoriesListLayout.module.css';
import {observer} from "mobx-react-lite";
import searchValueStore from "../../stores/SearchValueStore";
import sortValueStore from "../../stores/SortValueStore";
import PaginationButtons from "../PaginationButtons/PaginationButtons";
import SortFieldLayout from "../SortFieldLayout/SortFieldLayout";
import Loader from "../../library/Loader/Loader";

const RepositoriesListLayout = observer(() => {
    const searchValue = searchValueStore.searchValue;
    const sortValue = sortValueStore.sortValue;
    const order = sortValueStore.order;
    const totalCount = repositoriesStore.totalCount;

    useEffect(() => {
        let timerId = setTimeout(() => {
            repositoriesStore.resetPages();
            repositoriesStore.resetRepositories();
            repositoriesStore.fetchRepositories(searchValue, sortValue, order);
        }, 300)
        return () => clearTimeout(timerId);
    }, [searchValue, sortValue, order]);

    if (totalCount === 0) {
        return <h2 className={styles.message}>Введите запрос для поиска репозитория</h2>
    }

    if (repositoriesStore.isLoading) {
        return <Loader/>;
    }

    if (repositoriesStore.error) {
        return <h2 className={styles.error}>Ошибка: {repositoriesStore.error}</h2>;
    }

    return (
        <div>
            <div className={styles.repos}>
                {repositoriesStore.repositories.map((repo) => (
                    <RepoCardMini repo={repo} key={repo.id}/>
                ))}
            </div>
            <PaginationButtons/>
        </div>

    );
});

export default RepositoriesListLayout;