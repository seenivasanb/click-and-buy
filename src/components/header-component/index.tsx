import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/spp">SPP</Link></li>
                <li><Link to="/checkout">Checkout</Link></li>
                <li><Link to="/order-confirmation">Order Confirmation</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </div>
    )
}