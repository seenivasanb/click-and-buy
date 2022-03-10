import { makeAutoObservable } from "mobx";
import { LoaderItemType } from "types/todo-types";

export default class LoaderStore {
    loader: LoaderItemType[] = [];
    rootStore: any;

    constructor(rootStore: any) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }

    get getLoader() {
        return this.loader
    }

    getStatusByName(name: string) {
        return this.loader.find(item => item.name === name)?.status;
    }

    addNewRequest(name: string) {
        this.loader.push({ name, status: "Loading" });
    }

    removeSuccessRequest(name: string) {
        this.loader = this.loader.filter(item => item.name !== name);
    }

    updateFailedRequest(name: string, error?: string) {
        this.loader = this.loader.map(item => {
            if (item.name === name)
                return { ...item, status: "Failed", error: (error || "Fetching failed") }
            return item
        });
    }
}