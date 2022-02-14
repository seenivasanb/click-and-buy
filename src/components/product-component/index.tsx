import { ASSETS_PATH } from "../../configuration/variables";
import { PRODUCTS, PRODUCTS_TILES } from "../../mock-data/products";
import React, { Fragment, memo } from 'react'
import "./index.css"
import { Link } from "react-router-dom";
import { ProductType } from "../../types/products";

type Props = {
    type: string,
    product: ProductType
}

export default memo(({ type, product }: Props) => {
    return (
        <Fragment>
            {type === "product" &&
                <div className="product" key={product.id}>
                    <div className="product__image">
                        <img src={`${ASSETS_PATH}${product.img}`} alt="Product" />

                        <div className="product__overlay">
                            {!!product?.sizes?.length &&
                                <div className="product__sizes">
                                    <p className="product__sizes__title">Select size:</p>
                                    {product?.sizes?.map((size, index) =>
                                        <span className="product__sizes__size" key={index}>{size}</span>
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
            }

            {type === "product-tile" &&
                <div className="product-tile">
                    <div className="product-tile__image">
                        <img src={`${ASSETS_PATH}${product.img}`} alt={product.title} />
                    </div>
                    <div className="product-tile__details">
                        <h3 className="product-tile__title">{product.title}</h3>
                        <div className="product-tile__sub-title">{product.subTitle}</div>
                        <div className="product-tile__cta">
                            <Link className="product-tile__cta__link" to="/spp">Shop now</Link>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    )
});