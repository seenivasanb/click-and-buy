import { ASSETS_PATH } from "../../configuration/variables";
import React, { Fragment, memo } from 'react'
import "./index.css"

type Props = {}

export default memo((props: Props) => {
    const products = [
        {
            id: 1, img: 'images/products/product-1.jpg', title: 'Seaside Mint', subTitle: 'LARQ Bottle PureVis™', sizes: ['17 oz',
                '25 oz']
        },
        {
            id: 2, img: 'images/products/product-2.jpg', title: 'Obsidian Black', subTitle: 'LARQ Bottle Filtered', sizes: ['17 oz',
                '25 oz']
        },
        { id: 3, img: 'images/products/product-3.jpg', title: 'Monaco Blue', subTitle: 'LARQ Pitcher PureVis™' },
    ];

    const productTiles = [
        {
            id: 1, img: 'images/products-with-space/product-1.jpg', title: 'LARQ Pitcher PureVis™', subTitle: 'Brilliantly clean water beyond filtration.', sizes: ['17 oz',
                '25 oz']
        },
        {
            id: 2, img: 'images/products-with-space/product-2.jpg', title: 'LARQ Bottle Movement PureVis™', subTitle: 'Self cleaning & light as air.', sizes: ['17 oz',
                '25 oz']
        }
    ]

    return (
        <Fragment>
            <section className="products">
                {products?.map(product =>
                    <div className="product" key={product.id}>
                        <div className="product__image">
                            <img src={`${ASSETS_PATH}/${product.img}`} alt="Product" />

                            <div className="product__overlay">
                                {!!product?.sizes?.length &&
                                    <div className="product__sizes">
                                        <p className="product__sizes__title">Select size:</p>
                                        {product?.sizes?.map(size =>
                                            <span className="product__sizes__size">{size}</span>
                                        )}
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="product__details">
                            <p className="product__sub-title">{product.subTitle}</p>
                            <h3 className="product__title">{product.title}</h3>
                        </div>
                    </div>
                )}
            </section>
            <section>
                {productTiles.map(product =>
                    <div className="product-tiles">
                        <div className="product-tile">
                            <div className="product-tile__image">
                                <img src={product.img} alt={product.title} />
                            </div>
                            <div className="product-tile__details">
                                <div className="product-tile__title">{product.title}</div>
                                <div className="product-tile__sub-title">{product.subTitle}</div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </Fragment>
    )
});