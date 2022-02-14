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
    return (
        <section className={`products grid-cols-${noOfColumns}`}>
            {products?.map(product =>
                <ProductComponent type={type} product={product} />
            )}
        </section>
    )
}