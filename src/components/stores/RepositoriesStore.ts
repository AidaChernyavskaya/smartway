import {makeAutoObservable} from "mobx";
import RepositoriesService from "../../API/RepositoriesService";
import {Repository, Sort} from "../../types";

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

    async fetchRepositories (searchValue: string, sortValue: Sort) {
        if (searchValue.length === 0) {
            this.repositories = [];
            this.totalCount = 0;
        } else {
            this.setIsLoading(true);
            this.error = null;
            await RepositoriesService.getByParams({q: searchValue, sort: sortValue, per_page: this.perPage, page: this.currentPage})
                .then(response => {
                    this.repositories = response.data.items;
                    this.totalCount = response.data.total_count;
                    this.totalPages = Math.ceil(response.data.total_count/ this.perPage);
                })
                .catch(error => {
                    this.error = error instanceof Error ? error.message : "Что-то пошло не так";
                })
                .finally(() => {
                    this.setIsLoading(false);
                })
        }
    }

    setIsLoading = (loading: boolean) => {
        this.isLoading = loading;
    }

    prevPage = (searchValue: string, sortValue: Sort) => {
        this.currentPage--;
        this.fetchRepositories(searchValue, sortValue);
    }

    nextPage = (searchValue: string, sortValue: Sort) => {
        this.currentPage++;
        this.fetchRepositories(searchValue, sortValue);
    }

}

const repositoriesStore = new RepositoriesStore();

export default repositoriesStore;