import { ProductListComponent } from "../../components";
import React, { Fragment, memo } from "react"
import "./index.css";
import { PRODUCTS, PRODUCTS_TILES } from "../../mock-data/products";

export default memo(() => {
    console.log("Home Page");
    return (
        <Fragment>
            <h1>Home page</h1>

            <section className="trending-now">
                <h1 className="trending-now__title">Trending now</h1>
                <ProductListComponent type="product" products={PRODUCTS} noOfColumns={3} />
            </section>

            <section className="trending-now">
                <h1 className="trending-now__title">New arrivals</h1>
                <ProductListComponent type="product-tile" products={PRODUCTS_TILES} noOfColumns={2} />
            </section>
        </Fragment>
    )
})