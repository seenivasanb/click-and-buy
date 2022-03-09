import { createContext } from "react";
import TodoStore from "../../stores/todo-store";

type TodoType = {
    name: string,
    id: number,
    isSelected: boolean
}

type TodoStoreType = {
    todos: TodoType[],
    fetchTodos: TodoType[],
    addNewTodo: (todoName: string) => void,
    toggleSelect: (todoId: number) => void,
    removeTodo: (todoId: number) => void
}
export const TodoContext = createContext<TodoStoreType>(new TodoStore());