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
    const gridColoumClass = `grid-cols-${noOfColumns}`;

    return (
        <section className={`products ${gridColoumClass}`}>
            {products?.map(product =>
                <ProductComponent key={product.id} type={type} product={product} />
            )}
        </section>
    )
}