import RootContext from "contexts/root-context";
import { RegisterForm } from "forms";
import React, { memo, useContext, useEffect } from "react"
import { useNavigate } from "react-router";
import { Link } from "react-router-dom"
import "./index.css"

export default memo(() => {
    console.log("Register Page");

    const navigate = useNavigate();
    const { userStore } = useContext(RootContext);

    useEffect(() => {
        if (userStore.isUserExists) navigate("/", { replace: true });
    }, [userStore.isUserExists]);

    return (
        <section className="register">
            <h1 className="register__header">Register</h1>
            <div className="register__form">
                <RegisterForm />
            </div>

            <p className="link-text"> Already have an account? <Link className="register__link" to="/login">Login</Link></p>
        </section>
    )
});