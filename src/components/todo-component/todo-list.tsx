import { TodoContext } from "../../context/todo-context";
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import Todo from "./todo";
import TodoJson from "./todo-json";
import { autorun, computed, toJS } from "mobx";

const TodoList = observer(() => {
    console.log("Todo List");

    const { todoStore, loaderStore } = useContext(TodoContext);

    useEffect(() => {
        todoStore.fetchTodos();
    }, [])

    const loadStatus = computed(() => loaderStore.loader.find(item => item.name === "Load Todos")?.status).get();

    return (
        <section>
            <div className="flex flex-row min-h-screen">
                <div className="mr-[5%] min-w-[45%]">
                    <h3>Todo List:</h3>
                    <ul className="bg-green-50 p-8">
                        {loadStatus === "Loading"
                            ? <p>Fetching... from server</p>
                            : ""
                        }
                        {loadStatus === "Failed" ? <p className="text-red-500">Fetching is failded from server</p> : ""}
                        {todoStore?.getTodos?.map((todo) => <Todo key={todo.id} todo={todo} />)}
                    </ul>
                </div>

                <div className="min-w-[50%]">
                    <TodoJson />
                </div>
            </div>
            <br />
        </section>
    )
});

export default TodoList;