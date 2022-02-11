import { ContainerComponent, FooterComponent, HeaderComponent } from "./../../components"
import React, { Fragment, memo } from "react"
import { Outlet } from "react-router-dom"

export const Main = memo(() => {
    console.log("Main Layout");
    return (
        <Fragment>
            <HeaderComponent />
            <ContainerComponent page={<Outlet />} />
            <FooterComponent />
        </Fragment>
    )
})