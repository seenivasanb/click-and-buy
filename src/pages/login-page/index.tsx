import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <div>
            <div>Login Page</div>
            <Link to="/register">Register</Link>
        </div>
    )
}