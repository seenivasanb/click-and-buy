import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { TodoContext } from "../../context/todo-context";

type TodoType = {
    name: string,
    id: number,
    isDone: boolean
}

type Props = {
    todo: TodoType,
}

const Todo = observer(({ todo }: Props) => {
    console.log("Todo: " + todo.name);

    const { loaderStore, todoStore } = useContext(TodoContext);
    const todoId = todo.id;
    const handleToggleSelect = () => todoStore.toggleTodo(todo);
    const handleRemoveTodo = () => todoStore.removeTodo(todoId);

    const toggleName = "Toggle Todo - " + (todo.id);
    const toggleStatus = computed(() => loaderStore?.loader?.find(item => item.name === toggleName)?.status).get();

    const removeName = "Remove Todo - " + (todo.id);
    const removeStatus = computed(() => loaderStore?.loader?.find(item => item.name === removeName)?.status).get();

    return (
        <li className="flex flex-row justify-between mb-2">
            <div className="flex flex-row items-center">
                <input
                    className={`mx-2 w-4 h-4 cursor-pointer ${toggleStatus === "Loading" ? "opacity-70 pointer-events-none" : ""}`}
                    defaultChecked={todo.isDone} onChange={handleToggleSelect} type="checkbox" disabled={toggleStatus === "Loading"} />
                <div className={todo.isDone ? "font-bold line-through" : "font-bold"}>
                    {todo.id}. {todo.name}
                </div>
            </div>
            <div>
                <button
                    className={`ml-4 text-white bg-red-400 p-1 px-4 rounded-md
                     ${removeStatus === "Loading" ? "bg-slate-400 pointer-events-none" : ""}`}
                    disabled={removeStatus === "Loading"}
                    onClick={handleRemoveTodo}>Remove</button>
            </div>
        </li>
    )
});

export default Todo;