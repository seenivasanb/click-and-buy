import LoaderStore from "./loader-store";
import TodoStore from "./todo-store";
import TodoService from "../../services/todo-service";

export default class RootStore {
    todoStore: TodoStore;
    loaderStore: LoaderStore;

    constructor() {
        this.todoStore = new TodoStore(this, new TodoService());
        this.loaderStore = new LoaderStore(this);
    }
}