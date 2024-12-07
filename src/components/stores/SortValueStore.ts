import {Sort} from "../../types";
import {makeAutoObservable} from "mobx";

class SortValueStore {
    sortValue: Sort = "stars";

    constructor() {
        makeAutoObservable(this);
    }

    setSortValue = (value: Sort) => {
        this.sortValue = value;
    }

}

const sortValueStore = new SortValueStore();

export default sortValueStore;