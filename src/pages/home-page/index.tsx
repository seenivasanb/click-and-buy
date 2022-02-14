import { ProductComponent } from "../../components";
import React, { Fragment, memo } from "react"
import "./index.css";

export default memo(() => {
    console.log("Home Page");
    return (
        <Fragment>
            <h1>Home page</h1>

            <section className="trending-now">
                <h1 className="trending-now__title">Trending now</h1>
                <ProductComponent />
            </section>
        </Fragment>
    )
})