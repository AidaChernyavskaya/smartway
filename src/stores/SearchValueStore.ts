import {makeAutoObservable} from "mobx";

class SearchValueStore {
    searchValue: string = '';

    constructor() {
        makeAutoObservable(this);
    }

    setSearchValue = (value: string) => {
        this.searchValue = value;
    };
}

const searchValueStore = new SearchValueStore();
export default searchValueStore;