import { CartTotalComponent } from "components"
import CartItemListComponent from "components/cart-item-list-component"
import { ASSETS_PATH } from "configuration/constants"
import RootContext from "contexts/root-context"
import { observer } from "mobx-react-lite"
import React, { useContext } from 'react'
import './index.css'

type Props = {}

export default observer((props: Props) => {

    const { uiStore } = useContext(RootContext);

    return (
        <div className={`cart-overlay ${uiStore.isCartOverlayVisible ? "show" : ""}`}>
            <div className="cart-overlay__bg" onClick={() => uiStore.hideCartOverlayVisibility()}></div>
            <div className="cart-overlay__content">
                <div className="cart">
                    <div className="cart__header">
                        Your Cart <span className="close-btn" onClick={() => uiStore.hideCartOverlayVisibility()}></span>
                    </div>
                    <div className="cart__content">
                        <CartItemListComponent />
                        <CartTotalComponent />
                    </div>
                </div>
            </div>
        </div>
    )
});