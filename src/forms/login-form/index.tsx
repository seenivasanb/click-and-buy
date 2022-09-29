import { FormComponent } from "components";
import RootContext from "contexts/root-context";
import React, { useCallback, useContext, useState } from "react"
import { useNavigate } from "react-router";
import { FormInputType } from "types/form-types";
import { LoginFormErrorsType, LoginFormType, LoginFormValuesTypes } from "types/user-store";
import { observer } from "mobx-react-lite";
import { computed } from "mobx";

export default observer(({ onSubmit }: LoginFormType) => {
    console.log("Login Form");

    const navigate = useNavigate();
    const [loginFormErrors, setLoginFormErrors] = useState<LoginFormErrorsType>();
    const { userStore, loaderStore } = useContext(RootContext);
    const loginRequestStatus = computed(() => loaderStore.getStatusByName("LoginRequest")).get();

    const handleLogin = useCallback(async (data: LoginFormValuesTypes) => {
        const response = await userStore.onLogin(data);
        if (response === 3) {
            setLoginFormErrors({ email: { type: "validate", message: "Email address does not exists" } });
        } else if (response === 2) {
            setLoginFormErrors({ password: { type: "validate", message: "Wrong password" } });
        } else if (response === 1) {
            setLoginFormErrors({});
            navigate("/");
        }
    }, [loginFormErrors]);

    const LoginFormFields: FormInputType<Record<string, unknown>>[] = [
        {
            id: "email",
            name: "email",
            className: "textbox",
            label: "Email address",
            type: "email",
            rules: {
                required: "Required",
                pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Invalid email address"
                }
            },
            error: loginFormErrors?.email
        },
        {
            id: "password",
            name: "password",
            className: "textbox",
            label: "Password",
            type: "password",
            rules: { required: "Required" },
            error: loginFormErrors?.password
        }
    ];

    return (
        <FormComponent
            formName="login-form"
            onSubmit={onSubmit || handleLogin}
            formFields={LoginFormFields}
            submitButtonName="Login Me"
            isSubmitting={loginRequestStatus}
        />
    );
});