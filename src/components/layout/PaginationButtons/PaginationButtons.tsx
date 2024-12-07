import React from 'react';
import repositoriesStore from "../../stores/RepositoriesStore";
import {observer} from "mobx-react-lite";
import styles from './PaginationButtons.module.css';
import searchValueStore from "../../stores/SearchValueStore";
import sortValueStore from "../../stores/SortValueStore";

const PaginationButtons = observer(() => {
    const searchValue = searchValueStore.searchValue;
    const sortValue = sortValueStore.sortValue;
    const order = sortValueStore.order;
    const totalCoint = repositoriesStore.totalCount;

    const prevPage = () => {
        repositoriesStore.prevPage(searchValue, sortValue, order)
    }

    const nextPage = () => {
        repositoriesStore.nextPage(searchValue, sortValue, order)
    }

    if( totalCoint === 0) {
        return <></>
    }

    return (
        <div className={styles.pagination}>
            <button
                className={styles.button_colored} onClick={prevPage}
                disabled={repositoriesStore.currentPage === 1}
            >
                Prev
            </button>
            <p className={styles.pages}>page {repositoriesStore.currentPage} from {repositoriesStore.totalPages}</p>
            <button
                className={styles.button_colored} onClick={nextPage}
                disabled={repositoriesStore.currentPage  === repositoriesStore.totalPages}
            >
                Next
            </button>
        </div>
    );
});

export default PaginationButtons;