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

export enum ProductSizeType {
    small = "small",
    medium = "medium",
    large = "large",
}