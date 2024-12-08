import {Repository, sortFields, sortOrder} from "../../types";
import {makeAutoObservable} from "mobx";
import RepositoriesService from "../../API/RepositoriesService";

class DetailedRepositoryStore {
    repository: Repository | null = null;
    isLoading: boolean = false;
    error: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    async fetchDetailedRepository (owner: string, repoName: string) {
        this.isLoading = true;
        this.error = null;
        await RepositoriesService.getDetailedRepository(owner, repoName)
            .then(response => {
                this.repository = response.data;
            })
            .catch(error => {
                if(error.status === 403) {
                    this.error = '403 - превышен лимит запросов к API, попробуйте позже'
                } else {
                    this.error = error instanceof Error ? error.message : "Что-то пошло не так";
                }
            })
            .finally(() => {
                this.isLoading = false;
            })
        }
}

const detailedRepositoryStore = new DetailedRepositoryStore();

export default detailedRepositoryStore;