import { TodoContext } from "../../context/todo-context";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import Todo from "./todo";
import TodoJson from "./todo-json";

const TodoList = observer(() => {
    console.log("Todo list");

    const todoStore = useContext(TodoContext);

    return (
        <section>
            <div className="flex flex-row min-h-screen">
                <div className="mr-8 min-w-[50%]">
                    <h3>Todo List:</h3>
                    <ul className="bg-green-50 p-8">
                        {todoStore?.fetchTodos?.map((todo) => <Todo key={todo.id} todo={todo} />)}
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