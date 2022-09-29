import { makeAutoObservable } from "mobx";
import UserService from "services/user-service";
import RootStore from "stores";
import { LoginFormValuesTypes, RegisterFormValuesTypes, UserType } from "types/user-store";

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
        sessionStorage.setItem("accessToken", JSON.stringify(user.password));
    }

    *onLogin(loginFormValues: LoginFormValuesTypes): any {
        try {
            this.rootStore.loaderStore.addNewRequest("LoginRequest");
            const { status, data } = yield this.userService.onLogin(loginFormValues);
            this.rootStore.loaderStore.removeSuccessRequest("LoginRequest");
            if (status === 1) {
                this.setUser(data);
            }
            return status;
        } catch (error) {
            this.rootStore.loaderStore.updateFailedRequest("LoginRequest", "Network failed, Try later!");
        }
    }

    *onRegister(registerFormValues: RegisterFormValuesTypes): any {
        try {
            this.rootStore.loaderStore.addNewRequest("RegisterRequest");
            const { status, data } = yield this.userService.onRegister(registerFormValues);
            this.rootStore.loaderStore.removeSuccessRequest("RegisterRequest");
            if (status === 1) {
                this.setUser(data);
            }
            return status;
        } catch (error) {
            this.rootStore.loaderStore.updateFailedRequest("RegisterRequest", "Network failed, Try later!");
        }
    }

    onLogout() {
        this.user = {} as UserType;
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("accessToken");
    }
}