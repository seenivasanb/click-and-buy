import { FormComponent } from "components";
import RootContext from "contexts/root-context";
import { computed } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useCallback, useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { FormInputType } from "types/form-types";
import { RegisterFormErrorsType, RegisterFormType, RegisterFormValuesTypes } from "types/user-store";
import PasswordStrengthTooltip from "./password-strength";
import "./password-strength.css";

export default observer(({ onSubmit }: RegisterFormType): JSX.Element => {
    console.log("Register Form");
    const navigate = useNavigate();
    const [passwordValue, setPasswordValue] = useState("");
    const [isPasswordStrengthPopupVisible, setPasswordStrengthPopupVisible] = useState(false);
    const [registerFormErrors, setRegisterFormErrors] = useState<RegisterFormErrorsType>();
    const { userStore, loaderStore } = useContext(RootContext);
    const registerRequestStatus = computed(() => loaderStore.getStatusByName("RegisterRequest"));
    console.log("registerRequestStatus", registerRequestStatus.get());

    const showPasswordStrengthPopup = useCallback(() => {
        setPasswordStrengthPopupVisible(true);
    }, [isPasswordStrengthPopupVisible]);

    const hidePasswordStrengthPopup = useCallback(() => {
        setPasswordStrengthPopupVisible(false);
    }, [isPasswordStrengthPopupVisible]);

    const handleRegister = useCallback(async (data: RegisterFormValuesTypes) => {
        const response = await userStore.onRegister(data);
        if (response === 2) {
            setRegisterFormErrors({ email: { type: "validate", message: "Email is already exists" } });
        } else if (response === 1) {
            setRegisterFormErrors({});
            navigate("/");
        }
    }, [registerFormErrors]);

    const formFields: FormInputType<Record<string, unknown>>[] = [
        {
            id: "name",
            name: "name",
            className: "textbox",
            label: "Full Name",
            type: "text",
            rules: { required: "Required" },
        },
        {
            id: "email",
            name: "email",
            className: "textbox",
            label: "Email Address",
            type: "email",
            rules: {
                required: "Required",
                pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Invalid email address"
                }
            },
            error: registerFormErrors?.email
        },
        {
            id: "password",
            name: "password",
            className: "textbox",
            label: "Password",
            type: "password",
            onFocus: showPasswordStrengthPopup,
            rules: {
                required: "Required",
                pattern: { value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*\d)(?=.*[a-z]).{8,}$/, message: "Weak password" },
                onChange: (e) => { setPasswordValue(e.target.value) },
                onBlur: hidePasswordStrengthPopup,
            },
            children: (
                <PasswordStrengthTooltip
                    isVisible={isPasswordStrengthPopupVisible}
                    value={passwordValue}
                />
            )
        },
        {
            id: "confirm-password",
            name: "confirm-password",
            className: "textbox",
            label: "Confirm Password",
            type: "password",
            rules: {
                required: "Required",
                validate: value => value === passwordValue || "Passwords does not matched"
            },
        }
    ];

    return (
        <div>
            <FormComponent
                formName="register-form"
                onSubmit={onSubmit || handleRegister}
                formFields={formFields}
                submitButtonName="Register Me"
                isSubmitting={registerRequestStatus.get()}
            />
        </div>
    );
});