import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { TodoContext } from "../../context/todo-context";

type TodoType = {
    name: string,
    id: number,
    isSelected: boolean
}

type Props = {
    todo: TodoType,
}

const Todo = observer(({ todo }: Props) => {
    console.log("Todo: " + todo.name);

    const todoStore = useContext(TodoContext);
    const todoId = todo.id;
    const handleToggleSelect = () => todoStore.toggleSelect(todoId);
    const handleRemoveTodo = () => todoStore.removeTodo(todoId);

    return (
        <li className="flex flex-row justify-between mb-2">
            <div className="flex flex-row items-center">
                <div className="font-bold">{todo.id}.</div>
                <input className="mx-2 w-4 h-4 cursor-pointer" defaultChecked={todo.isSelected} onChange={handleToggleSelect} type="checkbox" />
                <div className={todo.isSelected ? "font-bold line-through" : "font-bold"}>{todo.name}</div>
            </div>

            <div>
                <button className="ml-4 text-white bg-red-400 p-1 px-4 rounded-md" onClick={handleRemoveTodo}>Remove</button>
            </div>
        </li>
    )
});

export default Todo;