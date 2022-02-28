import { ContainerComponent, FooterComponent, HeaderComponent } from "components"
import React from "react"
import { Outlet } from "react-router-dom"

export const Main = () => {
    console.log("Main Layout");
    return (
        <>
            <HeaderComponent />
            <ContainerComponent page={<Outlet />} />
            <FooterComponent />
        </>
    )
}