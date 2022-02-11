import React, { memo } from "react"
import { Link } from "react-router-dom"
import "./index.css"

export default memo(() => {
    console.log("Header Component");
    return (
        <header className="header">
            <div className="header__logo">Click<span>&</span>Buy</div>
            <nav className="header__nav-bar">
                <Link className="header__nav-bar__link" to="/">Home</Link>
                <Link className="header__nav-bar__link" to="/spp">SPP</Link>
                <Link className="header__nav-bar__link" to="/checkout">Checkout</Link>
                <Link className="header__nav-bar__link" to="/order-confirm">Order Confirm</Link>
                <Link className="header__nav-bar__link" to="/login">Login</Link>
                <Link className="header__nav-bar__link" to="/register">Register</Link>
            </nav>
        </header>
    )
})