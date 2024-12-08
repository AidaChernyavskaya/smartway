import {Repository, SortFields, SortOrder} from "../types";
import {makeAutoObservable} from "mobx";

class FavouritesStore {
    favourites: Repository[] = [];
    totalAmount: number = 0;

    constructor() {
        makeAutoObservable(this);
        this.loadData();
    }

    loadData () {
        const storedFavourites = localStorage.getItem('favourites');
        if (storedFavourites) {
            this.favourites = JSON.parse(storedFavourites);
            this.totalAmount = this.favourites.length;
        }
    }

    saveData() {
        localStorage.setItem('favourites', JSON.stringify(this.favourites));
    }

    addData(repo: Repository) {
        this.favourites.push(repo);
        this.totalAmount++;
        this.saveData();
    }

    isFavouriteRepository (repo: Repository): boolean {
        return this.favourites.some(item => item.id === repo.id)
    }

    removeData(repo: Repository) {
        this.favourites = this.favourites.filter(item => item.id !== repo.id);
        this.totalAmount--;
        this.saveData();
    }

    sortData(sortField: SortFields, sortingOrder: SortOrder): Repository[] {
        const compareFns = {
            stars: (a: Repository, b: Repository) => a.stargazers_count - b.stargazers_count,
            forks: (a: Repository, b: Repository) => a.forks_count - b.forks_count,
            updated: (a: Repository, b: Repository) => new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime(),
        };

        const compareFn = (a: Repository, b: Repository) =>
            sortingOrder === SortOrder.desc ? -compareFns[sortField](a, b) : compareFns[sortField](a, b);

        return this.favourites.slice().sort(compareFn);
    }
}

const favouritesStore = new FavouritesStore();

export default favouritesStore;