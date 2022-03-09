import React, { Fragment, memo } from "react"
import "./index.css";
import { ProductListComponent, TodoComponent } from "components";
import { PRODUCTS, PRODUCTS_TILES } from "mock-data/products";
import { ProductCategoryType } from "types/products";
import { TodoContext } from "../../context/todo-context";
import TodoStore from "../../stores/todo-store";

const todoStore = new TodoStore();

export default memo(() => {
    console.log("Home Page");

    return (
        <TodoContext.Provider value={todoStore}>
            <TodoComponent />
        </TodoContext.Provider>
    )
})