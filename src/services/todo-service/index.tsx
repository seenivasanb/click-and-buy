import { TODO_API_URL } from "configuration/variables";
import { TodoType } from "types/todo-types";

export default class TodoService {
    async fetchTodos(): Promise<any> {
        try {
            const res: any = await fetch(`${TODO_API_URL}/todos/`);
            return await res.json();
        } catch (error: any) {
            return error;
        }
    }

    async addTodo(todoText: string): Promise<any> {
        try {
            const res: any = await fetch(`${TODO_API_URL}/todos/`, {
                method: "POST",
                body: JSON.stringify({
                    "name": todoText,
                    "isDone": false
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            });
            return await res.json();
        } catch (error: any) {
            return error;
        }
    }

    async toggleTodo(todo: TodoType): Promise<any> {
        try {
            const res: any = await fetch(`${TODO_API_URL}/todos/${todo.id}`, {
                method: "PUT",
                body: JSON.stringify({
                    ...todo,
                    isDone: !todo.isDone
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            });
            return await res.json();
        } catch (error: any) {
            return error;
        }
    }

    async removeTodo(todoId: number): Promise<any> {
        try {
            const res = await fetch(`${TODO_API_URL}/todos/${todoId}`, {
                method: "DELETE"
            });
            return await res.json();
        } catch (error: any) {
            return error;
        }
    }
}