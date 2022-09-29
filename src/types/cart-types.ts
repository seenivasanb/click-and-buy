export type Cart = {
    cartId: string,
    cartItems: CartItem[],
    createdAt: string
}

export type CartItem = {
    productId: number,
    productName: string,
    quantity: number,
    sku: {
        skuId: number,
        shadeName: string,
        color: string,
        size: {
            sizeId: string,
            price: string
        },
        ratings: number,
    }
    defaultSkuId: string,
    defaultSizeId: string,
}