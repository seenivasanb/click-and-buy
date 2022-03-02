import { LoginForm } from "forms"
import React, { memo, useCallback } from "react"
import { Link } from "react-router-dom"
import "./index.css"

export default memo(() => {
    console.log("Login Page");

    const loginOnSubmit = useCallback((data: any) => {
        alert(JSON.stringify(data, null, 2));
    }, []);

    return (
        <section className="login">
            <h1 className="login__header">Login</h1>
            <div className="login__form">
                <LoginForm
                    formName={"login-form"}
                    onSubmit={loginOnSubmit}
                    submitButtonName={"Login Me"}
                />
            </div>
            <p className="link-text"> Don't have an account? <Link className="login__link" to="/register">Register</Link></p>
        </section>
    )
})