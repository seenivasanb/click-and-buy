import { makeAutoObservable } from "mobx";
import RootStore from "stores";
import { LoaderItemType } from "types/loader-store";

export default class LoaderStore {
    loader: LoaderItemType = {} as LoaderItemType;
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }

    get getLoader() {
        return this.loader;
    }

    getStatusByName(name: string) {
        return this.loader[name];
    }

    addNewRequest(name: string) {
        this.loader = { ...this.loader, [name]: { status: "Loading" } };
    }

    removeSuccessRequest(name: string) {
        const { [name]: currentRequest, ...rest } = this.loader;
        this.loader = rest;
    }

    updateFailedRequest(name: string, error?: string) {
        if (this.loader[name]) {
            this.loader[name].status = "Failed";
            this.loader[name].error = error;
        }
    }
}