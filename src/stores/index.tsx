import UserService from "services/user-service";
import CartStore from "./cart-store";
import LoaderStore from "./loader-store";
import UiStore from "./ui-store";
import UserStore from "./user-store";

export default class RootStore {
    userStore: UserStore;
    loaderStore: LoaderStore;
    uiStore: UiStore;
    cartStore: CartStore;

    constructor() {
        this.userStore = new UserStore(this, new UserService());
        this.loaderStore = new LoaderStore(this);
        this.uiStore = new UiStore();
        this.cartStore = new CartStore();
    }
}