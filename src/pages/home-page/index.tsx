import React, { Fragment, memo } from "react"
import "./index.css";
import { ProductListComponent } from "../../components";
import { PRODUCTS, PRODUCTS_TILES } from "../../mock-data/products";
import { ProductCategoryType } from "../../types/products";

export default memo(() => {
    console.log("Home Page");
    return (
        <Fragment>
            <section className="trending-now">
                <h1 className="trending-now__title">Trending now</h1>
                <ProductListComponent
                    category={ProductCategoryType.productWithSize}
                    products={PRODUCTS.slice(0, 3)} />
            </section>

            <section className="new-arrivals">
                <h1 className="new-arrivals__title">New arrivals</h1>
                <ProductListComponent
                    category={ProductCategoryType.productWithCTA}
                    products={PRODUCTS_TILES}
                    noOfColumns={{ medium: 3, large: 2 }} />
            </section>
        </Fragment>
    )
})