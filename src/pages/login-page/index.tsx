import { LoginForm } from "forms"
import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router";
import { observer } from "mobx-react-lite";
import "./index.css"
import RootContext from "contexts/root-context"

export default observer(() => {
    console.log("Login Page");

    const navigate = useNavigate();
    const { userStore } = useContext(RootContext);

    useEffect(() => {
        if (userStore.isUserExists) navigate("/", { replace: true });
    }, [userStore.isUserExists]);

    return (
        <section className="login">
            <h1 className="login__header">Login</h1>
            <div className="login__form">
                <LoginForm />
            </div>
            <p className="link-text"> Don't have an account? <Link className="login__link" to="/register">Register</Link></p>
        </section>
    )
});