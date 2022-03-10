import { TodoContext } from "../../context/todo-context";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { computed } from "mobx";

const TodoJson = observer(() => {
    console.log("Todo JSON");

    const { todoStore, loaderStore } = useContext(TodoContext);
    const loadStatus = computed(() => loaderStore.loader.find(item => item.name === "Load Todos")?.status).get();

    return (
        <>
            <h3>Todo JSON:</h3>
            <div className="bg-green-50 p-8 pr-0">
                {loadStatus === "Loading"
                    ? <p>Fetching... from server</p>
                    : ""
                }
                {loadStatus === "Failed" ? <p className="text-red-500">Fetching is failded from server</p> : ""}
                {todoStore.getTodos.length
                    ? <pre className="max-h-96 pr-8 overflow-auto">
                        {JSON.stringify(todoStore.getTodos, null, 1)}
                    </pre>
                    : ""
                }
            </div>
        </>
    )
});

export default TodoJson;