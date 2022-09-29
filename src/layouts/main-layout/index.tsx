import { CartComponent, ContainerComponent, FooterComponent, HeaderComponent } from "components"
import { observer } from "mobx-react-lite";
import React from "react"
import { Outlet } from "react-router-dom";

export const Main = observer(() => {
    console.log("Main Layout");
    return (
        <>
            <HeaderComponent />
            <ContainerComponent page={<Outlet />} />
            <FooterComponent />
            <CartComponent />
        </>
    )
});