import { MAX_QUANTITY } from "configuration/constants"
import RootContext from "contexts/root-context";
import React, { useContext } from 'react';
import './index.css'

type Props = {
    quantity: number,
    product: any
}

export default ({ product, quantity }: Props) => {

    const { cartStore } = useContext(RootContext);

    const addItemToCart = () => {
        cartStore.addCartItem(product);
    }

    return (
        <div className="add-to-bag-button" onClick={addItemToCart}>
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