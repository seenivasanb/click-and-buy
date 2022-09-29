import React, { Fragment, memo } from "react"
import "./index.css";
import { ProductListComponent } from "components";
import { PRODUCTS, PRODUCTS_TILES } from "mock-data/products";
import { ProductCategoryType } from "types/products";

export default memo(() => {
    console.log("Home Page");
    return (
        <Fragment>
            <section className="trending-now">
                <h1 className="trending-now__title">Trending now</h1>
                <ProductListComponent
                    category={ProductCategoryType.productWithSize}
                    direction="column"
                    products={PRODUCTS}
                />
            </section>

            <section className="new-arrivals">
                <h1 className="new-arrivals__title">New arrivals</h1>
                <ProductListComponent
                    category={ProductCategoryType.productWithCTA}
                    products={PRODUCTS_TILES}
                    direction="column"
                    responsive={{ medium: 2, large: 2, extraLarge: 2 }}
                />
            </section>
        </Fragment>
    )
})