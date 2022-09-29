import AddToBagComponent from "components/add-to-bag-component"
import CartItemComponent from "components/cart-item-component"
import { ASSETS_PATH } from 'configuration/constants'
import React from 'react'
import './index.css'

type Props = {}

export default (props: Props) => {
    return (
        <div className="product-list">

            <CartItemComponent />

            <div className="product-item">
                <div className="product-item__image">
                    <img src={`${ASSETS_PATH}/images/products/product-3.jpg`} alt="" />
                </div>
                <div className="product-item__content">
                    <div className="product-item__name">LARQ Bottle Filtered</div>
                    <div className="product-item__size">Size 25 oz</div>
                    <div className="product-item__shade">Color Granite White</div>
                    <div className="product-item__auto-replenishment">Personalize No</div>
                    <div className="product-item__add-to-bag">
                        <AddToBagComponent quantity={1} />
                    </div>
                </div>
                <div className="product-item__close-and-price">
                    <div className="product-item__close">&#x2A2F;</div>
                    <div className="product-item__price">$48.95</div>
                </div>
            </div>

            <div className="product-item">
                <div className="product-item__image">
                    <img src={`${ASSETS_PATH}/images/products/product-2.jpg`} alt="" />
                </div>
                <div className="product-item__content">
                    <div className="product-item__name">LARQ Bottle PureVis</div>
                    <div className="product-item__size">Size 25 oz</div>
                    <div className="product-item__shade">Color Granite White</div>
                    <div className="product-item__auto-replenishment">Personalize No</div>
                    <div className="product-item__add-to-bag">
                        <AddToBagComponent quantity={0} />
                    </div>
                </div>
                <div className="product-item__close-and-price">
                    <div className="product-item__close">&#x2A2F;</div>
                    <div className="product-item__price">$48.95</div>
                </div>
            </div>
        </div>
    )
}