import React, { memo } from "react"
import "./index.css";
import { TodoContext } from "../../context/todo-context";
import RootStore from "../../stores/todo-store";
import { TodoComponent } from "components";

export default memo(() => {
    console.log("Home Page");

    return (
        <TodoContext.Provider value={new RootStore()}>
            <TodoComponent />
        </TodoContext.Provider>
    )
})