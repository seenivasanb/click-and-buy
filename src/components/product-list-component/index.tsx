import React from 'react'
import { ProductAlignmentType, ProductCategoryType, ProductSizeType, ProductType } from "../../types/products";
import { ProductComponent } from "../../components";
import "./index.css"

type Props = {
    category: ProductCategoryType,
    alignment?: ProductAlignmentType,
    size?: ProductSizeType,
    products: ProductType[]
}

/**
 * Base Template component holding the HashRouter along with all the basic routes
 * @param category - specifies the type of the product that will be [productWithCTA, productWithSize, productTwoColumns]
 * @param alignment - specifies the alignment of the products should be display that will be [row, column]
 * @param size - specifies the size of the product that will be [small, medium, large]
 * @param products - array of objects that contains the list of products details
 * @returns {JSX.Element}
 */
export default ({ category, alignment = ProductAlignmentType.row, size, products }: Props): JSX.Element => {
    console.log("Product List Component");

    return (
        <section className={`products flex-${alignment}`} style={{ flexDirection: alignment === "row" ? "row" : "column" }}>
            {products?.map(product =>
                <ProductComponent key={product.id} category={category} size={size} product={product} />
            )}
        </section>
    )
}