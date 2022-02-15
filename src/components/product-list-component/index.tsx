import React from 'react'
import { ProductCategoryType, ProductSizeType, ProductType } from "types/products";
import { ProductComponent } from "../../components";
import "./index.css"

type Props = {
    category: ProductCategoryType,
    noOfColumns?: number,
    size?: ProductSizeType,
    products: ProductType[]
}

/**
 * Base Template component holding the HashRouter along with all the basic routes
 * @param category - specifies the type of the product that will be [productWithCTA, productWithSize, productTwoColumns]
 * @param noOfColumns - specifies the no of columns that the product should be display
 * @param size - specifies the size of the product that will be [small, medium, large]
 * @param products - array of objects that contains the list of products details
 * @returns {JSX.Element}
 */
export default ({ category, noOfColumns, size, products }: Props) => {
    console.log("Product List Component");

    return (
        <section className="products" style={{ gridTemplateColumns: `repeat(${noOfColumns}, minmax(0, 1fr))` }}>
            {products?.slice(0, noOfColumns)?.map(product =>
                <ProductComponent key={product.id} category={category} size={size} product={product} />
            )}
        </section>
    )
}