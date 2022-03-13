import { FormInput } from "components";
import React from 'react'
import { useForm, UseFormRegister } from "react-hook-form";
import { FormInputType } from "types/form-types";

type FormProps<TFormValues> = {
    onSubmit: (data: any) => void,
    formFields?: FormInputType<TFormValues>[],
    formName: string,
    submitButtonName?: string,
    isSubmitting?: boolean
}

export default <TFormValues extends Record<string, unknown>>({
    formFields, formName, onSubmit, submitButtonName, isSubmitting
}: FormProps<TFormValues>) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({ shouldUseNativeValidation: false });

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            {formFields?.map((field: any) => {
                const fieldName = `${formName}-${field.name}`;
                const error = errors[field.name] || field.error;
                return <FormInput {...field} key={fieldName} id={fieldName} register={register} error={error} />
            })
            }
            <button type="submit"
                className={`button-primary ${isSubmitting ? "disabled" : ""}`}
                disabled={isSubmitting}>
                {isSubmitting ? "Loading..." : submitButtonName ? submitButtonName : "Submit"}
            </button>
        </form >
    )
}