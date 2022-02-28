import React, { memo } from "react"
import { Link } from "react-router-dom"
import "./index.css"
import { RegisterForm } from "../../forms"

export default memo(() => {
    console.log("Register Page");

    return (
        <section className="register">
            <h1 className="register__header">Register</h1>
            <div className="register__form">
                <RegisterForm />
            </div>

            <Link className="register__link" to="/login">Login</Link>
        </section>
    )
})