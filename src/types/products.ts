export type ProductType = {
    id: number,
    img: string,
    title: string,
    subTitle: string,
    sizes?: string[]
}

export enum ProductCategoryType {
    productWithSize = "product-with-size",
    productWithCTA = "product-with-cta",
    productTwoColumns = "product-two-columns",
}

export type ProductListNoOfColumnsType = {
    medium?: number,
    large?: number,
    extraLarge?: number
}