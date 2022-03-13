import { DeepMap } from "react-hook-form"

type LoaderType = {
    status: "Loading" | "Failed",
    error?: string
}

type LoaderValues = Record<string, LoaderType>;

export type LoaderItemType<
    TLoaderValues extends LoaderValues = LoaderValues
    > = DeepMap<TLoaderValues, string>;