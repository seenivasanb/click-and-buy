import { HeaderComponent } from './../../components'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const Main = () => {
    return (
        <div>
            <HeaderComponent />
            <Outlet />
        </div>
    )
}
