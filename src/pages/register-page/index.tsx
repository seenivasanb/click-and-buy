import React, { memo } from "react"
import { Link } from "react-router-dom"
import "./index.css"

export default memo(() => {
    console.log("Register Page");
    return (
        <section className="register">
            <h1>Register page</h1>
            <Link className="register__link" to="/login">Login</Link>
        </section>
    )
})