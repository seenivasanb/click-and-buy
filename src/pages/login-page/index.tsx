import React, { memo } from "react"
import { Link } from "react-router-dom"
import "./index.css"
import { LoginForm } from "../../forms"
import "./index.css"

export default memo(() => {
    console.log("Login Page");

    return (
        <section className="login max-w-lg">
            <h1 className="login__header">Login</h1>
            <div className="login__form">
                <LoginForm />
            </div>
            <Link className="login__link" to="/register">Register</Link>
        </section>
    )
})