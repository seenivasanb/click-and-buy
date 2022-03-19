import { FieldError } from "react-hook-form"

export type UserType = {
    email: string,
    password: string,
    id?: number,
    accessToken: string
}

export type UserStoreType = {
    user: UserType,
    getUser: () => void,
    onLogin: (loginValues: LoginFormValuesTypes) => void,
    onRegister: (registerValues: RegisterFormValuesTypes) => void
}

export type LoginFormValuesTypes = {
    email: string,
    password: string
}

export type RegisterFormValuesTypes = {
    email: string,
    name: string,
    password: string
}

export type RootStoreType = {
    userStore: UserStoreType
}

export type LoginFormErrorsType = {
    email?: FieldError,
    password?: FieldError
}

export type RegisterFormErrorsType = {
    email?: FieldError,
    name?: FieldError,
    password?: FieldError
}

export type LoginFormType = {
    onSubmit?: (values: LoginFormValuesTypes) => void,
}

export type RegisterFormType = {
    onSubmit?: (registerValues: RegisterFormValuesTypes) => void
}