import React from 'react'
import { ProductWithCTALayoutType, ProductWithSizeLayoutType, ProductType } from "types/products";
import { ProductComponent } from "components";
import "./index.css"

type Props = {
    products: ProductType[],
    direction?: "row" | "column",
} & (ProductWithSizeLayoutType | ProductWithCTALayoutType)

/**
 * Base Template component holding the HashRouter along with all the basic routes
 * @param category - specifies the type of the product that will be [productWithCTA, productWithSize, productTwoColumns]
 * @param noOfColumns - specifies the noOfColumns that will be  ProductListNoOfColumnsType
 * @param products - array of objects that contains the list of products details
 * @returns {JSX.Element}
 */
export default ({ category, responsive, products, direction = "column" }: Props): JSX.Element => {
    console.log("Product List Component");

    let productsClasses = "";
    if (direction === "column") {
        productsClasses += `products-${direction} `;
        productsClasses += `products-${direction}-medium-${responsive?.medium ? responsive.medium : "3"} `;
        productsClasses += `products-${direction}-large-${responsive?.large ? responsive.large : "3"} `;
        productsClasses += `products-${direction}-extra-large-${responsive?.extraLarge ? responsive.extraLarge : "3"} `;
    } else if (direction === "row") {
        productsClasses += `products-${direction} `;
        productsClasses += `products-${direction}-medium-${responsive?.medium ? responsive.medium : "1"} `;
        productsClasses += `products-${direction}-large-${responsive?.large ? responsive.large : "1"} `;
        productsClasses += `products-${direction}-extra-large-${responsive?.extraLarge ? responsive.extraLarge : "1"} `;
    }

    return (
        <section className={`products products--${category} ${productsClasses}`}>
            {products?.map(product =>
                <ProductComponent key={product.id} category={category} product={product} />
            )}
        </section>
    )
}