import { FormInput } from "components";
import React from 'react'
import { useForm } from "react-hook-form";
import { FormInputType } from "types/form-types";

type FormProps<TFormValues> = {
    onSubmit: (data: any) => void,
    formFields?: FormInputType<TFormValues>[],
    formName: string,
    submitButtonName?: string
}

export default <TFormValues extends Record<string, unknown>>({
    formFields, formName, onSubmit, submitButtonName
}: FormProps<TFormValues>) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({ shouldUseNativeValidation: false });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {formFields?.map((field: any) => {
                const fieldName = `${formName}-${field.name}`;
                return <FormInput {...field} key={fieldName} id={fieldName} register={register} error={errors[field.name]} />
            })}
            <button type="submit" className="button-primary">{submitButtonName ? submitButtonName : "Submit"}</button>
        </form>
    )
}