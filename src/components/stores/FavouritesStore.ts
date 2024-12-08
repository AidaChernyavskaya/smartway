import {Repository, sortFields, sortOrder} from "../../types";
import {makeAutoObservable} from "mobx";

class FavouritesStore {
    favourites: Repository[] = [];
    totalAmount: number = 0;

    constructor() {
        makeAutoObservable(this);
        this.loadData();
    }

    loadData () {
        const storedFavs = localStorage.getItem('favourites');
        if (storedFavs) {
            this.favourites = JSON.parse(storedFavs);
            this.totalAmount = this.favourites.length;
        }
    }

    addData(repo: Repository) {
        this.favourites.push(repo);
        this.totalAmount++;
        this.saveData();
    }

    saveData() {
        localStorage.setItem('favourites', JSON.stringify(this.favourites));
    }

    isDataExist (repo: Repository) {
        return this.favourites.some(item => item.id === repo.id)
    }

    removeData(repo: Repository) {
        this.favourites = this.favourites.filter(item => item.id !== repo.id);
        this.totalAmount--;
        this.saveData();
    }

    sortData(sortFields: sortFields, sortOrder: sortOrder) {
        if (sortFields === 'stars' && sortOrder === 'desc') {
            return this.favourites.slice().sort((a, b) =>
                b.stargazers_count - a.stargazers_count)
        } else if (sortFields === 'forks' && sortOrder === 'desc') {
            return this.favourites.slice().sort((a, b) =>
                b.forks_count - a.forks_count)
        } else if (sortFields === 'updated' && sortOrder === 'desc') {
            return this.favourites.slice().sort((a, b) =>
                new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
        } else {
            return this.favourites.slice().sort((a, b) =>
                new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime())
        }
    }
}

const favouritesStore = new FavouritesStore();

export default favouritesStore;