import {Repository} from "../../types";
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

    sortData() {

    }
}

const favouritesStore = new FavouritesStore();

export default favouritesStore;