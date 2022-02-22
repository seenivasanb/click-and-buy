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

export type ProductWithSizeResponsiveType = {
    medium?: 1 | 2 | 3,
    large?: 1 | 2 | 3,
    extraLarge?: 1 | 2 | 3
}

export type ProductWithCTAResponsiveType = {
    medium?: 1 | 2 | 3 | 4,
    large?: 1 | 2 | 3 | 4,
    extraLarge?: 1 | 2 | 3 | 4
}

export type ProductWithSizeLayoutType = {
    category: ProductCategoryType.productWithSize,
    responsive?: ProductWithSizeResponsiveType
}

export type ProductWithCTALayoutType = {
    category: ProductCategoryType.productWithCTA,
    responsive?: ProductWithCTAResponsiveType
}