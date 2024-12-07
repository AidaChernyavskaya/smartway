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

}

const repositoriesStore = new RepositoriesStore();

export default repositoriesStore;