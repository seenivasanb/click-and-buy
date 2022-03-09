import { TodoContext } from "../../context/todo-context";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";

const TodoJson = observer(() => {
    console.log("Todo JSON");

    const todoStore = useContext(TodoContext);
    return (
        <>
            <h3>Todo JSON:</h3>
            <div className="bg-green-50 py-8">
                {todoStore.fetchTodos.length
                    ? <pre className="max-h-96 px-8 overflow-auto">
                        {JSON.stringify(todoStore.fetchTodos, null, 1)}
                    </pre>
                    : ""
                }
            </div>
        </>
    )
});

export default TodoJson;