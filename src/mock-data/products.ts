export const PRODUCTS = [
    {
        id: 1,
        img: '/images/products/product-1.jpg',
        title: 'Seaside Mint',
        subTitle: 'LARQ Bottle PureVis™',
        sizes: ['17 oz', '25 oz']
    },
    {
        id: 2,
        img: '/images/products/product-2.jpg',
        title: 'Obsidian Black',
        subTitle: 'LARQ Bottle Filtered',
        sizes: ['17 oz', '25 oz']
    },
    {
        id: 3,
        img: '/images/products/product-3.jpg',
        title: 'Monaco Blue',
        subTitle: 'LARQ Pitcher PureVis™'
    },
    {
        id: 4,
        img: '/images/products/product-2.jpg',
        title: 'Obsidian Black',
        subTitle: 'LARQ Bottle Filtered',
        sizes: ['17 oz', '25 oz']
    }
];

export const PRODUCTS_TILES = [
    {
        id: 1,
        img: '/images/products-with-space/product-1.jpg',
        title: 'LARQ Pitcher PureVis™',
        subTitle: 'Brilliantly clean water beyond filtration.',
        sizes: ['17 oz', '25 oz']
    },
    {
        id: 2,
        img: '/images/products-with-space/product-2.jpg',
        title: 'LARQ Bottle Movement PureVis™',
        subTitle: 'Self cleaning & light as air.',
        sizes: ['17 oz', '25 oz']
    },
    {
        id: 3,
        img: '/images/products-with-space/product-2.jpg',
        title: 'LARQ Bottle Movement PureVis™',
        subTitle: 'Self cleaning & light as air.',
        sizes: ['17 oz', '25 oz']
    },
    {
        id: 4,
        img: '/images/products-with-space/product-1.jpg',
        title: 'LARQ Pitcher PureVis™',
        subTitle: 'Brilliantly clean water beyond filtration.',
        sizes: ['17 oz', '25 oz']
    }
];

export const MOCK_PRODUCTS = [
    {
        productId: "PROD001",
        name: "LARQ Bottle PureVi",
        defaultSkuId: "SKU001",
        defaultSizeId: "SIZE001",
        skus: [
            {
                skuId: "SKU001",
                shadeName: "Sku 1",
                color: "#ff00ff",
                size: "17 oz",
                price: {
                    actual: "$118.00",
                    current: "$116.00"
                },
                sizes: [
                    {
                        size: "17 oz",
                        sizeId: "SIZE001",
                        price: {
                            actual: "$118.00",
                            current: "$116.00"
                        },
                    },
                    {
                        size: "25 oz",
                        sizeId: "SIZE002",
                        price: {
                            actual: "$136.00",
                            current: "$126.00"
                        },
                    },
                    {
                        size: "32 oz",
                        sizeId: "SIZE003",
                        price: {
                            actual: "$162.00",
                            current: "$135.00"
                        },
                    },
                ],
                ratings: 4,
                inventoryStatus: 1
            },
            {
                skuId: "SKU002",
                shadeName: "Sku 2",
                color: "#ff00ff",
                sizes: [
                    {
                        size: "10 oz",
                        sizeId: "SIZE001",
                        price: {
                            actual: "$83.00",
                            current: "$74.00"
                        },
                    },
                    {
                        size: "15 oz",
                        sizeId: "SIZE002",
                        price: {
                            actual: "$92.00",
                            current: "$83.00"
                        },
                    },
                ],
                ratings: 4,
                inventoryStatus: 1
            },
            {
                skuId: "SKU003",
                shadeName: "Sku 3",
                color: "#ff00ff",
                sizes: [
                    {
                        size: "5 oz",
                        sizeId: "SIZE001",
                        price: {
                            actual: "$48.00",
                            current: "$41.00"
                        },
                    },
                    {
                        size: "10 oz",
                        sizeId: "SIZE002",
                        price: {
                            actual: "$93.00",
                            current: "$80.00"
                        },
                    },
                ],
                ratings: 4,
                inventoryStatus: 1
            },
            {
                skuId: "SKU004",
                shadeName: "Shade1",
                color: "#ff00ff",
                sizes: [
                    {
                        size: "17 oz",
                        sizeId: "SIZE001",
                        price: {
                            actual: "$118.00",
                            current: "$116.00"
                        },
                    },
                    {
                        size: "25 oz",
                        sizeId: "SIZE002",
                        price: {
                            actual: "$136.00",
                            current: "$126.00"
                        },
                    },
                    {
                        size: "32 oz",
                        sizeId: "SIZE003",
                        price: {
                            actual: "$162.00",
                            current: "$135.00"
                        },
                    },
                ],
                ratings: 4,
                inventoryStatus: 2
            },
        ]
    },
    {
        productId: "PROD002",
        name: "LARQ Bottle PureVi",
        defaultSkuId: "SKU001",
        defaultSizeId: "SIZE001",
        skus: [
            {
                skuId: "SKU001",
                shadeName: "Sku 1",
                color: "#ff00ff",
                sizes: [
                    {
                        size: "17 oz",
                        sizeId: "SIZE001",
                        price: {
                            actual: "$118.00",
                            current: "$116.00"
                        },
                    },
                    {
                        size: "25 oz",
                        sizeId: "SIZE002",
                        price: {
                            actual: "$136.00",
                            current: "$126.00"
                        },
                    },
                    {
                        size: "32 oz",
                        sizeId: "SIZE003",
                        price: {
                            actual: "$162.00",
                            current: "$135.00"
                        },
                    },
                ],
                ratings: 4,
                inventoryStatus: 1
            },
            {
                skuId: "SKU002",
                shadeName: "Sku 2",
                color: "#ff00ff",
                sizes: [
                    {
                        size: "10 oz",
                        sizeId: "SIZE001",
                        price: {
                            actual: "$83.00",
                            current: "$74.00"
                        },
                    },
                    {
                        size: "15 oz",
                        sizeId: "SIZE002",
                        price: {
                            actual: "$92.00",
                            current: "$83.00"
                        },
                    },
                ],
                ratings: 4,
                inventoryStatus: 1
            },
            {
                skuId: "SKU003",
                shadeName: "Sku 3",
                color: "#ff00ff",
                sizes: [
                    {
                        size: "5 oz",
                        sizeId: "SIZE001",
                        price: {
                            actual: "$48.00",
                            current: "$41.00"
                        },
                    },
                    {
                        size: "10 oz",
                        sizeId: "SIZE002",
                        price: {
                            actual: "$93.00",
                            current: "$80.00"
                        },
                    },
                ],
                ratings: 4,
                inventoryStatus: 1
            },
            {
                skuId: "SKU004",
                shadeName: "Shade1",
                color: "#ff00ff",
                sizes: [
                    {
                        size: "17 oz",
                        sizeId: "SIZE001",
                        price: {
                            actual: "$118.00",
                            current: "$116.00"
                        },
                    },
                    {
                        size: "25 oz",
                        sizeId: "SIZE002",
                        price: {
                            actual: "$136.00",
                            current: "$126.00"
                        },
                    },
                    {
                        size: "32 oz",
                        sizeId: "SIZE003",
                        price: {
                            actual: "$162.00",
                            current: "$135.00"
                        },
                    },
                ],
                ratings: 4,
                inventoryStatus: 2
            },
        ]
    }
] 