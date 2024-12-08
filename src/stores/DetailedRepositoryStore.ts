import {Repository} from "../types";
import {makeAutoObservable} from "mobx";
import RepositoriesService from "../API/RepositoriesService";

class DetailedRepositoryStore {
    repository: Repository | null = null;
    isLoading: boolean = false;
    error: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    async loadDetailedRepository (owner: string, repoName: string) {
        this.setIsLoading(true);
        this.setError(null);
        await RepositoriesService.getDetailedRepository(owner, repoName)
            .then(response => {
                this.setRepository(response.data);
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

    setIsLoading = (loading: boolean) => {
        this.isLoading = loading;
    }

    setRepository = (repo: Repository) => {
        this.repository = repo;
    }

    setError = (err: string | null) => {
        this.error = err;
    }
}

const detailedRepositoryStore = new DetailedRepositoryStore();

export default detailedRepositoryStore;