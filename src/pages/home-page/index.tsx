import React, { Fragment, memo } from "react"
import "./index.css";
import { ProductListComponent } from "../../components";
import { PRODUCTS, PRODUCTS_TILES } from "../../mock-data/products";
import { ProductAlignmentType, ProductCategoryType, ProductSizeType } from "../../types/products";

export default memo(() => {
    console.log("Home Page");
    return (
        <Fragment>
            <section className="trending-now">
                <h1 className="trending-now__title">Trending now</h1>

                <ProductListComponent
                    category={ProductCategoryType.productWithSize}
                    products={PRODUCTS}
                    size={ProductSizeType.small} />
            </section>

            <section className="new-arrivals">
                <h1 className="new-arrivals__title">New arrivals</h1>
                <ProductListComponent
                    category={ProductCategoryType.productWithCTA}
                    products={PRODUCTS_TILES}
                    size={ProductSizeType.medium} />
            </section>

            <section className="new-arrivals">
                <h1 className="new-arrivals__title">Reference products</h1>
                <div className="flex flex-col md:flex-row">
                    <div className="w-72">
                        <ProductListComponent
                            category={ProductCategoryType.productWithSize}
                            products={PRODUCTS}
                            alignment={ProductAlignmentType.column}
                            size={ProductSizeType.small} />
                    </div>
                    <div>
                        <ProductListComponent
                            category={ProductCategoryType.productWithCTA}
                            products={PRODUCTS_TILES}
                            size={ProductSizeType.small} />

                        <ProductListComponent
                            category={ProductCategoryType.productWithCTA}
                            products={PRODUCTS_TILES.slice(1)}
                            size={ProductSizeType.large} />

                        <ProductListComponent
                            category={ProductCategoryType.productWithSize}
                            products={PRODUCTS.slice(1)}
                            size={ProductSizeType.small} />
                        <ProductListComponent
                            category={ProductCategoryType.productWithCTA}
                            products={PRODUCTS_TILES.slice(1)}
                            size={ProductSizeType.large} />
                    </div>
                </div>

            </section>
        </Fragment>
    )
})