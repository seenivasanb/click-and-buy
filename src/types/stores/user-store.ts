import { FieldError } from "react-hook-form"

export type UserType = {
    email: string,
    password: string,
    id?: number,
    accessToken?: string
}

export type UserStoreType = {
    user: UserType,
    getUser: () => void,
    onLogin: (username: string, password: string) => void
}

export type LoginFormValuesTypes = {
    email: string,
    password: string
}

export type RootStoreType = {
    userStore: UserStoreType
}

export type LoginFormErrorsType = {
    email?: FieldError,
    password?: FieldError
}

export type LoginFormType = {
    onSubmit?: (values: LoginFormValuesTypes) => void,
}