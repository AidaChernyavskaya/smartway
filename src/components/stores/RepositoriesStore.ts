import {makeAutoObservable} from "mobx";
import RepositoriesService from "../../API/RepositoriesService";
import {ReposInfo, Repository} from "../../types";

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

    async fetchRepositories (searchValue: string) {
        this.setIsLoading(true);
        this.error = null;

        await RepositoriesService.getByParams({q: searchValue, per_page: this.perPage, page: this.currentPage})
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

    setIsLoading = (loading: boolean) => {
        this.isLoading = loading;
    }

    prevPage = (searchValue: string) => {
        this.currentPage--;
        this.fetchRepositories(searchValue);
    }

    nextPage = (searchValue: string) => {
        this.currentPage++;
        this.fetchRepositories(searchValue);
    }

}

const repositoriesStore = new RepositoriesStore();

export default repositoriesStore;