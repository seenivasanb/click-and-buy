import { makeAutoObservable } from "mobx";

type TodoType = {
    name: string,
    id: number,
    isSelected: boolean
}

export default class TodoStore {
    todos: TodoType[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    get fetchTodos() {
        return this.todos;
    }

    addNewTodo(todoName: string) {
        const todoLength = this?.todos?.length;
        let id = !!todoLength ? this.todos[todoLength - 1].id : 0;
        this.todos.push({ name: todoName, id: ++id, isSelected: false });
    }

    toggleSelect(todoId: number) {
        const index = this.todos.findIndex(todo => todo.id === todoId);
        this.todos[index].isSelected = !this.todos[index].isSelected;
    }

    removeTodo(todoId: number) {
        const updatedTodos = this.todos.filter(todo => todo.id !== todoId);
        this.todos = updatedTodos;
    }
}