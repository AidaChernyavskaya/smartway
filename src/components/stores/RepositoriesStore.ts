import {makeAutoObservable} from "mobx";
import RepositoriesService from "../../API/RepositoriesService";
import {Repository, sortFields, sortOrder} from "../../types";

class RepositoriesStore {
    repositories: Array<Repository> = [];
    totalCount = 0;
    isLoading = false;
    error: string | null = null;
    currentPage = 1;
    perPage = 12;
    totalPages = 0;

    constructor() {
        makeAutoObservable(this);
    }

    async fetchRepositories (searchValue: string, sortValue: sortFields, order: sortOrder) {
        if (searchValue.length === 0) {
            this.repositories = [];
            this.totalCount = 0;
        } else {
            this.setIsLoading(true);
            this.error = null;
            await RepositoriesService.getByParams(
                {q: searchValue, sort: sortValue, order: order, per_page: this.perPage, page: this.currentPage}
            )
                .then(response => {
                    this.repositories = response.data.items;
                    this.totalCount = response.data.total_count;
                    this.totalPages = Math.ceil(response.data.total_count/ this.perPage);
                })
                .catch(error => {
                    if(error.status === 403) {
                        this.error = '403 - превышен лимит запросов к API, попробуйте позже'
                    } else {
                        this.error = error instanceof Error ? error.message : "Что-то пошло не так";
                    }
                })
                .finally(() => {
                    this.setIsLoading(false);
                })
        }
    }

    setIsLoading = (loading: boolean) => {
        this.isLoading = loading;
    }

    prevPage = (searchValue: string, sortValue: sortFields, order: sortOrder) => {
        this.currentPage--;
        this.fetchRepositories(searchValue, sortValue, order);
    }

    nextPage = (searchValue: string, sortValue: sortFields, order: sortOrder) => {
        this.currentPage++;
        this.fetchRepositories(searchValue, sortValue, order);
    }

    resetPages = () => {
        this.currentPage = 1;
        this.totalPages = 0;
    };

    resetRepositories = () => {
        this.repositories = [];
    };

}

const repositoriesStore = new RepositoriesStore();

export default repositoriesStore;