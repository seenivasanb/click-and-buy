import React from 'react'
import { ProductCategoryType, ProductListNoOfColumnsType, ProductType } from "../../types/products";
import { ProductComponent } from "../../components";
import "./index.css"

type Props = {
    category: ProductCategoryType,
    products: ProductType[],
    noOfColumns?: ProductListNoOfColumnsType
}

const getClassesByKey = (key: string, object: ProductListNoOfColumnsType) => {
    let classes = object?.medium ? ` ${key}--medium-${object.medium}` : "";
    classes += object?.large ? ` ${key}--large-${object.large}` : "";
    classes += object?.extraLarge ? ` ${key}--extra-large-${object.extraLarge}` : "";
    return classes;
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

    const productsClasses = noOfColumns ? getClassesByKey('products', noOfColumns) : "";
    const productClasses = noOfColumns ? getClassesByKey('products', noOfColumns) : "";

    return (
        <section className={`products${productsClasses}`}>
            {products?.map(product =>
                <ProductComponent responsiveClasses={productClasses} key={product.id} category={category} product={product} />
            )}
        </section>
    )
}