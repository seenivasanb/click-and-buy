import { MAX_QUANTITY } from "configuration/constants"
import React from 'react'
import './index.css'

type Props = {
    quantity: number
}

export default ({ quantity }: Props) => {
    return (
        <div className="add-to-bag-button">
            {!quantity
                ? <div>Add To Cart</div>
                : <div className="plus-and-minus">
                    <div className={`minus ${quantity > 1 ? "active" : ""}`}>&minus;</div>
                    <div className="quantity">{quantity}</div>
                    <div className={`plus ${quantity >= MAX_QUANTITY ? "active" : ""}`}>&#x2B;</div>
                </div>
            }
        </div>
    )
}