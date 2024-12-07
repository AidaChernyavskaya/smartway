import {sortFields, sortOrder} from "../../types";
import {makeAutoObservable} from "mobx";

class SortValueStore {
    sortValue: sortFields = sortFields.stars;
    order: sortOrder = sortOrder.desc;

    constructor() {
        makeAutoObservable(this);
    }

    setSortValue = (value: sortFields) => {
        this.sortValue = value;
    }

    setOrder = (value: sortOrder) => {
        this.order = value;
    }

}

const sortValueStore = new SortValueStore();

export default sortValueStore;