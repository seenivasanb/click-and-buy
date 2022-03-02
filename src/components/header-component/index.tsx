import React, { memo, useState } from "react"
import { Link } from "react-router-dom"
import "./index.css"

export default memo(() => {
    console.log("Header Component");
    const [isNavBarVisible, setNavBarVisible] = useState(false);

    const toggleHamburgerMenu = () => {
        setNavBarVisible(value => value ? false : true)
    }

    return (
        <header className={`header ${isNavBarVisible ? "show-nav-bar" : "hide-nav-bar"}`}>
            <div className="wrapper">
                <div className="header__logo">Click<span>&</span>Buy</div>
                <div className="header__hamburger-icon" onClick={toggleHamburgerMenu}>
                    <span className="header__hamburger-icon__close"></span>
                </div>
                <nav className="header__nav-bar" onClick={toggleHamburgerMenu}>
                    <Link className="header__nav-bar__link" to="/">Home</Link>
                    <Link className="header__nav-bar__link" to="/spp">SPP</Link>
                    <Link className="header__nav-bar__link" to="/checkout">Checkout</Link>
                    <Link className="header__nav-bar__link" to="/order-confirm">Order Confirm</Link>
                    <Link className="header__nav-bar__link" to="/login">Login</Link>
                    <Link className="header__nav-bar__link" to="/register">Register</Link>
                </nav>
            </div>
        </header>
    )
})