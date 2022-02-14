import React from 'react'
import { ProductType } from "types/products";
import { ProductComponent } from "../../components";
import "./index.css"

type Props = {
    type: string,
    noOfColumns: number,
    products: ProductType[]
}

export default ({ type, noOfColumns, products }: Props) => {
    console.log("Product List Component");

    return (
        <section className="products" style={{ gridTemplateColumns: `repeat(${noOfColumns}, minmax(0, 1fr))` }}>
            {products?.map(product =>
                <ProductComponent type={type} product={product} />
            )}
        </section>
    )
}