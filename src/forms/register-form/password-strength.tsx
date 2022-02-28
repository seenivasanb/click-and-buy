import React, { memo, useEffect, useMemo, useState } from 'react'

type Props = {
    isVisible: boolean,
    value: string
}

const PasswordStrengthTooltip = memo(({ isVisible, value }: Props) => {
    console.log("Password Strength Tooltip");
    console.log("passwordValue", value);

    const [passwordErrors, setpasswordErrors] = useState<string[]>();

    useEffect(() => {
        checkPasswordStrength(value);
    }, [value])

    const passwordStrengthKeys: any = useMemo(() => ({
        lowercase: "At least one lowercase",
        uppercase: "At least one uppercase",
        number: "At least one number",
        specialCharacter: "At least one special charater",
        minLength: "At least 8 charaters"
    }), [])

    const checkPasswordStrength = (value: string) => {
        let errors: string[] = [];
        if (value.search(/[a-z]/) < 0)
            errors = [...errors, "lowercase"];
        if (value.search(/[A-Z]/) < 0)
            errors = [...errors, "uppercase"];
        if (value.search(/[0-9]/i) < 0)
            errors = [...errors, "number"];
        if (value.search(/[!@#$%^&*]/i) < 0)
            errors = [...errors, "specialCharacter"];
        if (value.length < 8)
            errors = [...errors, "minLength"];
        if (!!errors.length)
            errors = [...errors, "valid"];
        setpasswordErrors(errors);
    }

    return (
        <div className={`password-strength-popup ${isVisible ? "show" : "hidden"}`}>
            <p className="password-strength-popup__title">Must contain:</p>
            <ul>
                {Object.keys(passwordStrengthKeys)?.map((key: any) => {
                    const isValid = !passwordErrors?.includes("valid") || !passwordErrors?.includes(key);
                    return <li key={key} className={isValid ? "valid" : "invalid"}> {passwordStrengthKeys[key]}</li>
                })}
            </ul>
        </div>
    )
});

export default PasswordStrengthTooltip;