import React, { memo } from "react"
import { Link } from "react-router-dom"
import "./index.css"

export default memo(() => {
    console.log("Login Page");
    return (
        <section className="login">
            <h1>Login page</h1>
            <Link className="login__link" to="/register">Register</Link>
        </section>
    )
})