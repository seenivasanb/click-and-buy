import { makeAutoObservable } from "mobx";
import { RootStoreType, TodoServiceType, TodoType } from "types/todo-types";

export default class TodoStore {
    todos: TodoType[] = [];
    rootStore: RootStoreType;
    private todoAPIService: TodoServiceType;

    constructor(rootStore: any, todoService: TodoServiceType) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
        this.todoAPIService = todoService;
    }

    get getTodos() {
        return this.todos;
    }

    *fetchTodos(): any {
        try {
            this.rootStore.loaderStore.addNewRequest("Load Todos");
            const response = yield this.todoAPIService.fetchTodos();
            if (response.length) {
                this.todos = response;
                this.rootStore.loaderStore.removeSuccessRequest("Load Todos");
            }
        } catch (error: any) {
            console.log(JSON.stringify(error, null, 2));
            this.rootStore.loaderStore.updateFailedRequest("Load Todos", "Fetch failed");
        }
    }

    *addTodo(todoText: string): any {
        const todoLength = this?.todos?.length;
        let id = !!todoLength ? (this.todos[todoLength - 1].id + 1) : 1;
        try {
            this.rootStore.loaderStore.addNewRequest("Add Todo - " + id);
            const response = yield this.todoAPIService.addTodo(todoText);
            if (!!Object.keys(response).length) {
                this.todos.push(response);
                this.rootStore.loaderStore.removeSuccessRequest("Add Todo - " + id);
            }
        } catch (error: any) {
            console.log(JSON.stringify(error, null, 2));
            this.rootStore.loaderStore.updateFailedRequest("Add Todo - " + id, "Add todo failed");
        }
    }

    *toggleTodo(todo: TodoType): any {
        const { id } = todo;
        try {
            this.rootStore.loaderStore.addNewRequest("Toggle Todo - " + id);
            const response = yield this.todoAPIService.toggleTodo(todo);
            this.toggleSelect(response.id, response.isDone);
            this.rootStore.loaderStore.removeSuccessRequest("Toggle Todo - " + id);

        } catch (error: any) {
            this.rootStore.loaderStore.updateFailedRequest("Toggle Todo - " + id, "Toggle todo failed");
        }
    }

    *removeTodo(todoId: number): any {
        try {
            this.rootStore.loaderStore.addNewRequest("Remove Todo - " + todoId);
            const response = yield this.todoAPIService.removeTodo(todoId);
            if (response) {
                this.todos = this.todos.filter(todo => todo.id !== todoId);
                this.rootStore.loaderStore.removeSuccessRequest("Remove Todo - " + todoId);
            }

        } catch (error: any) {
            console.log(JSON.stringify(error, null, 2));
            this.rootStore.loaderStore.updateFailedRequest("Remove Todo - " + todoId, "Remove todo failed");
        }
    }

    addNewTodo(todoName: string) {
        const todoLength = this?.todos?.length;
        let id = !!todoLength ? this.todos[todoLength - 1].id : 0;
        this.todos.push({ name: todoName, id: ++id, isDone: false });
    }

    toggleSelect(id: number, isDone: boolean,) {
        const index = this.todos.findIndex(todo => todo.id === id);
        this.todos[index].isDone = isDone;
    }
}