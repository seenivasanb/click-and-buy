import React from 'react'
import './index.css'
type Props = {}

export default (props: Props) => {
    return (
        <>
            <div className="cart-total">
                <div className="cart-total__item sub-total">
                    <div className="cart-total__item__name">Subtotal</div>
                    <div className="cart-total__item__value">$238.95</div>
                </div>
                <div className="cart-total__item">
                    <div className="cart-total__item__name">Shipping</div>
                    <div className="cart-total__item__value">Free</div>
                </div>
                <div className="cart-total__item tax">
                    <div className="cart-total__item__name">Tax</div>
                    <div className="cart-total__item__value">$23.90</div>
                </div>
            </div>
            <div className="cart-final-total">
                <div className="cart-final-total__name">Total (USD)</div>
                <div className="cart-final-total__value">$262.85</div>
            </div>
        </>
    )
}