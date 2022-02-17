import React from 'react'
import { ProductCategoryType, ProductListNoOfColumnsType, ProductType } from "../../types/products";
import { ProductComponent } from "../../components";
import "./index.css"

type Props = {
    category: ProductCategoryType,
    products: ProductType[],
    noOfColumns?: ProductListNoOfColumnsType
}

/**
 * Base Template component holding the HashRouter along with all the basic routes
 * @param category - specifies the type of the product that will be [productWithCTA, productWithSize, productTwoColumns]
 * @param noOfColumns - specifies the noOfColumns that will be  ProductListNoOfColumnsType
 * @param products - array of objects that contains the list of products details
 * @returns {JSX.Element}
 */
export default ({ category, noOfColumns, products }: Props): JSX.Element => {
    console.log("Product List Component");

    let productsClasses = noOfColumns?.medium ? `products-medium-${noOfColumns.medium} ` : "";
    productsClasses += noOfColumns?.large ? `products-large-${noOfColumns.large} ` : "";
    productsClasses += noOfColumns?.extraLarge ? `products-extra-large-${noOfColumns.extraLarge} ` : "";

    return (
        <section className={`products products--${category} ${productsClasses}`}>
            {products?.map(product =>
                <ProductComponent key={product.id} category={category} product={product} />
            )}
        </section>
    )
}