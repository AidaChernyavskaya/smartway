import {SortFields, SortOrder} from "../types";
import {makeAutoObservable} from "mobx";

class SortValueStore {
    sortValue: SortFields = SortFields.stars;
    order: SortOrder = SortOrder.desc;

    constructor() {
        makeAutoObservable(this);
    }

    setSortValue = (value: SortFields) => {
        this.sortValue = value;
    }

    setOrder = (value: SortOrder) => {
        this.order = value;
    }
}

const sortValueStore = new SortValueStore();

export default sortValueStore;