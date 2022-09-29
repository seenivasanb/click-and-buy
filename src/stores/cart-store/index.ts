import { makeAutoObservable } from "mobx";
import { Cart, CartItem } from "types/cart-types";

export default class CartStore {
    cart: Cart;

    constructor() {
        makeAutoObservable(this);
        const sessionCart = sessionStorage.getItem("cart") || "";
        this.cart = {
            cartId: "",
            cartItems: [],
            createdAt: ""
        }
        if (sessionCart?.length > 0) {
            this.cart = JSON.parse(sessionCart);
        } else {
            this.createCart()
        }
    }

    createCart() {
        const date = new Date();
        const randomId = date.getTime();
        const cartId = "cartId_" + randomId;
        this.cart = {
            cartId: cartId,
            cartItems: [],
            createdAt: date.toLocaleDateString()
        };
        sessionStorage.setItem("cart", JSON.stringify(this.cart));
    }

    addCartItem(item: CartItem) {
        this.cart.cartItems.push(item);
        sessionStorage.setItem("cart", JSON.stringify(this.cart));
    }

    removeCartItem(item: CartItem) {
        this.cart.cartItems = this.cart.cartItems.filter(cartItem => cartItem.productId !== item.productId);
    }
}