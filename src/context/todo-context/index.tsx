import { createContext } from "react";
import { RootStoreType } from "types/todo-types";

export const TodoContext = createContext<RootStoreType>({} as RootStoreType);