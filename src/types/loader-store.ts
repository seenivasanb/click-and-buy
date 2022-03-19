import { DeepMap } from "react-hook-form"

export type LoaderStatus = {
    status: "Loading" | "Failed"
}

export type LoaderType = {
    status: string,
    error?: string
}

type LoaderValues = Record<string, LoaderType>;

export type LoaderItemType<
    TLoaderValues extends LoaderValues = LoaderValues
    > = DeepMap<TLoaderValues, string>;