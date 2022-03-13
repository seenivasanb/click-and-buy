import { makeAutoObservable } from "mobx";
import UserService from "services/user-service";
import RootStore from "stores";
import { LoginFormValuesTypes, UserType } from "types/stores/user-store";

export default class UserStore {
    user: UserType = {} as UserType;
    rootStore: RootStore;

    constructor(rootStore: RootStore, private userService: UserService) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }

    get getUser() {
        return this.user;
    }

    get isUserExists() {
        const sessionUser = sessionStorage?.getItem("user") || '';
        const parsedUser = !!sessionUser.length ? JSON.parse(sessionUser) : {};
        return !!Object.keys(this.user).length || !!Object.keys(parsedUser).length;
    }

    setUser(user: UserType) {
        this.user = user;
        sessionStorage.setItem("user", JSON.stringify(user));
        sessionStorage.setItem("accessToken", JSON.stringify(user.accessToken));
    }

    *onLogin(loginFormValues: LoginFormValuesTypes): any {
        try {
            this.rootStore.loaderStore.addNewRequest("LoginRequest");
            const response = yield this.userService.onLogin(loginFormValues);
            this.rootStore.loaderStore.removeSuccessRequest("LoginRequest");
            if (response === "Cannot find user")
                return 1;
            if (response === "Incorrect password")
                return 2
            if (response?.user && Object.keys(response.user)) {
                const { user } = response.user;
                this.setUser({ ...user, accessToken: response.accessToken });
            }
            return 3;
        } catch (error) {
            console.log("error", error);
            this.rootStore.loaderStore.updateFailedRequest("LoginRequest", "Login request failed");
        }
    }

    onLogout() {
        this.user = {} as UserType;
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("accessToken");
    }
}