import {makeAutoObservable} from "mobx";
import RepositoriesService from "../API/RepositoriesService";
import {Repository, SortFields, SortOrder} from "../types";
import {AxiosResponse} from "axios";
import {useNavigate} from "react-router";

class RepositoriesStore {
    repositories: Array<Repository> = [];
    totalCount: number = 0;
    isLoading: boolean = false;
    error: string | null = null;
    currentPage: number = 1;
    perPage: number = 12;
    totalPages: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    async loadRepositories (searchValue: string, sortValue: SortFields, order: SortOrder) {
        if (searchValue.length === 0) {
            this.setRepositories([]);
            this.setTotalCount(0);
        } else {
            this.setIsLoading(true);
            this.setError(null);
            await RepositoriesService.getByParams(
                {q: searchValue, sort: sortValue, order: order, per_page: this.perPage, page: this.currentPage}
            )
                .then(response => {
                    this.setData(response);
                })
                .catch(error => {
                    if(error.status === 403) {
                        this.setError('403 - превышен лимит запросов к API, попробуйте позже');
                    } else {
                        this.setError(error instanceof Error ? error.message : "Что-то пошло не так");
                    }
                })
                .finally(() => {
                    this.setIsLoading(false);
                })
        }
    }

    prevPage = (searchValue: string, sortValue: SortFields, order: SortOrder) => {
        this.currentPage--;
        this.loadRepositories(searchValue, sortValue, order);
    }

    nextPage = (searchValue: string, sortValue: SortFields, order: SortOrder) => {
        this.currentPage++;
        this.loadRepositories(searchValue, sortValue, order);
    }

    setData = (response: AxiosResponse) => {
        this.setRepositories(response.data.items);
        this.setTotalCount(response.data.total_count);
        this.totalPages = Math.ceil(response.data.total_count/ this.perPage);
    }

    resetPages = () => {
        this.currentPage = 1;
        this.totalPages = 0;
    };

    resetRepositories = () => {
        this.repositories = [];
    };

    setRepositories = (repos: Repository[]) => {
        this.repositories = repos;
    }


    setIsLoading = (loading: boolean) => {
        this.isLoading = loading;
    }

    setError = (err: string | null) => {
        this.error = err;
    }

    setTotalCount = (count: number) => {
        this.totalCount = count;
    }

}

const repositoriesStore = new RepositoriesStore();

export default repositoriesStore;