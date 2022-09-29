import { AddToBagComponent } from "components"
import { ASSETS_PATH } from "configuration/constants"
import React from 'react'

type Props = {}

export default (props: Props) => {
    return (
        <div className="product-item">
            <div className="product-item__image">
                <img src={`${ASSETS_PATH}/images/products/product-1.jpg`} alt="" />
            </div>
            <div className="product-item__content">
                <div className="product-item__name">LARQ Bottle PureVis</div>
                <div className="product-item__size">Size 17 oz</div>
                <div className="product-item__shade">Color Seaside Mint</div>
                <div className="product-item__auto-replenishment">Frequency Ships every 2 months</div>
                <div className="product-item__add-to-bag">
                    <AddToBagComponent quantity={2} />
                </div>
            </div>
            <div className="product-item__close-and-price">
                <div className="product-item__close">&#x2A2F;</div>
                <div className="product-item__price">
                    $190.00
                </div>
            </div>
        </div>
    )
}