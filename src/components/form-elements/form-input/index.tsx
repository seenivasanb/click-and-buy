import React, { forwardRef } from 'react';
import { UseFormRegister } from "react-hook-form";
import { FormInputType } from "types/form-types";
import "./index.css"

type InputProps<TFormValues> = {
    register?: UseFormRegister<TFormValues>
} & FormInputType<TFormValues>;

export default forwardRef(<TFormValues extends Record<string, unknown>>({
    children,
    error,
    id,
    label,
    name,
    register,
    rules,
    ...props
}: InputProps<TFormValues>, ref?: any): JSX.Element => {

    console.log("Input");

    return (
        <fieldset className="fieldset">
            <input id={id || name} name={name} ref={ref} {...props} {...(register && register(name, rules))} placeholder=" " />
            <label className="label" htmlFor={name}>{label}</label>
            {error && <p className="error">{error.message}</p>}
            {children}
        </fieldset>
    )
});