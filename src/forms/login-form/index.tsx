import { FormComponent } from "../../components";
import React, { useCallback } from "react"
import { FormInputType } from "types/form-types";

export default () => {

    const onSubmit = useCallback((data: any) => {
        alert(JSON.stringify(data, null, 2));
    }, []);

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
            formName="login-form"
            onSubmit={onSubmit}
            formFields={LoginFormFields}
            submitButtonClassName={"Login Me"}
        />
    );
}