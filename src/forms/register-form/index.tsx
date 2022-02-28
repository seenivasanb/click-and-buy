import { FormComponent } from "../../components";
import React, { useCallback, useRef, useState } from "react"
import { FormInputType } from "types/form-types";
import PasswordStrengthTooltip from "./password-strength";
import "./password-strength.css";

const RegisterForm = (): JSX.Element => {

    const [passwordValue, setPasswordValue] = useState("");
    const [isPasswordStrengthPopupVisible, setPasswordStrengthPopupVisible] = useState(false);

    const showPasswordStrengthPopup = useCallback(() => {
        setPasswordStrengthPopupVisible(true);
    }, [isPasswordStrengthPopupVisible]);

    const hidePasswordStrengthPopup = useCallback(() => {
        setPasswordStrengthPopupVisible(false);
    }, [isPasswordStrengthPopupVisible]);

    const onSubmit = useCallback((data: any) => {
        alert(JSON.stringify(data, null, 2));
    }, []);

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
                onSubmit={onSubmit}
                formFields={formFields}
                submitButtonClassName={"Register Me"}
            />
        </div>
    );
}

export default RegisterForm;