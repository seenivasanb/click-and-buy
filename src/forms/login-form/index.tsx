import { FormComponent } from "components";
import React, { memo } from "react"
import { FormInputType } from "types/form-types";

export default memo(({ formName, onSubmit, submitButtonName }: any) => {

    const LoginFormFields: FormInputType<Record<string, unknown>>[] = [
        {
            id: "username",
            name: "username",
            className: "textbox",
            label: "Full Name",
            type: "text",
            rules: { required: "Required" },
        },
        {
            id: "password",
            name: "password",
            className: "textbox",
            label: "Password",
            type: "password",
            rules: { required: "Required" },
        }
    ];

    return (
        <FormComponent
            formName={formName}
            onSubmit={onSubmit}
            formFields={LoginFormFields}
            submitButtonName={submitButtonName}
        />
    );
});