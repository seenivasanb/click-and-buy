export type TodoType = {
    name: string,
    id: number,
    isDone: boolean
}

export type TodoStoreType = {
    todos: TodoType[],
    getTodos: TodoType[],
    fetchTodos: () => void,
    addTodo: (todoName?: string) => void,
    addNewTodo: (todoName: string) => void,
    toggleTodo: (todo: TodoType) => void,
    toggleSelect: (todoId: number) => void,
    removeTodo: (todoId: number) => void,
}

export type LoaderItemType = {
    name: string,
    status: string,
    error?: string
}

export type LoaderStoreType = {
    loader: LoaderItemType[],
    getLoader: LoaderItemType[],
    getStatusByName: (name: string) => string,
    addNewRequest: (name: string) => void,
    removeSuccessRequest: (name: string) => void,
    updateFailedRequest: (name: string, error?: string) => void
}

export type RootStoreType = {
    todoStore: TodoStoreType,
    loaderStore: LoaderStoreType
}

export type TodoServiceType = {
    fetchTodos: () => Promise<any>,
    addTodo: (text: string) => Promise<any>,
    toggleTodo: (todo: TodoType) => Promise<any>,
    removeTodo: (todoId: number) => Promise<any>
}