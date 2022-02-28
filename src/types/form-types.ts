import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldError, FieldValues, Path, RegisterOptions } from "react-hook-form";

type InputTypes = {
    className?: string,
    id?: string,
    label?: string,
    type: string,
    children?: JSX.Element,
} & Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, ''>;

export type FormInputType<TFormValues> = {
    name: Path<TFormValues>,
    error?: FieldError,
    values?: FieldValues,
    rules?: RegisterOptions,
} & InputTypes;