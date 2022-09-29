import { makeAutoObservable } from "mobx";

export default class UiStore {
    cartOverlayVisibility: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    get isCartOverlayVisible() {
        return this.cartOverlayVisibility;
    }

    showCartOverlayVisibility() {
        this.cartOverlayVisibility = true;
    }

    hideCartOverlayVisibility() {
        this.cartOverlayVisibility = false;
    }
}