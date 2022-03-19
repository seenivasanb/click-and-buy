import { FormInput } from "components";
import React from 'react'
import { useForm } from "react-hook-form";
import { FormInputType } from "types/form-types";
import { LoaderType } from "types/loader-store";

type FormProps<TFormValues> = {
    onSubmit: (data: any) => void,
    formFields?: FormInputType<TFormValues>[],
    formName: string,
    submitButtonName?: string,
    isSubmitting?: LoaderType | undefined
}

export default <TFormValues extends Record<string, unknown>>({
    formFields, formName, onSubmit, submitButtonName, isSubmitting
}: FormProps<TFormValues>) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({ shouldUseNativeValidation: false });

    const isLoading = isSubmitting?.status === "Loading" ? true : false;
    const isFailed = isSubmitting?.status === "Failed" ? true : false;

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            {formFields?.map((field: any) => {
                const fieldName = `${formName}-${field.name}`;
                const error = errors[field.name] || field.error;
                return <FormInput {...field} key={fieldName} id={fieldName} register={register} error={error} />
            })
            }
            <button type="submit"
                className={`button-primary ${isLoading ? "disabled" : ""}`}
                disabled={isLoading}>
                {isLoading ? "Loading..." : submitButtonName ? submitButtonName : "Submit"}
            </button>
            {isFailed ? <p className="api-error">{isSubmitting?.error}</p> : ""}
        </form >
    )
}