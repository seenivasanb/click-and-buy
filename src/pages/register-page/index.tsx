import { RegisterForm } from "forms";
import React, { memo, useCallback } from "react"
import { Link } from "react-router-dom"
import "./index.css"

export default memo(() => {
    console.log("Register Page");

    const registerOnSubmit = useCallback((data: any) => {
        alert(JSON.stringify(data, null, 2));
    }, []);

    return (
        <section className="register">
            <h1 className="register__header">Register</h1>
            <div className="register__form">
                <RegisterForm
                    formName={"register-form"}
                    onSubmit={registerOnSubmit}
                    submitButtonName={"Register Me"}
                />
            </div>

            <p className="link-text"> Already have an account? <Link className="register__link" to="/login">Login</Link></p>

        </section>
    )
});