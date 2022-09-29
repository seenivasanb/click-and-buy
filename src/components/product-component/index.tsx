import { ASSETS_PATH } from "configuration/constants";
import React, { Fragment, memo } from 'react'
import "./index.css"
import { Link } from "react-router-dom";
import { ProductCategoryType, ProductType } from "types/products";

type Props = {
    category: ProductCategoryType,
    product: ProductType
}

/**
 * Base Template component holding the HashRouter along with all the basic routes
 * @param category - specifies the type of the product that will be [productWithCTA, productWithSize, productTwoColumns]
 * @param product - specifies the size of the product that will be [small, medium, large]
 * @returns {JSX.Element}
 */
export default memo(({ category, product }: Props) => {
    console.log('Product component');
    return (
        <Fragment>
            {category === "product-with-size" &&
                <div className="product product--with-size" key={product.id}>
                    <div className="product--with-size__image">
                        <img src={`${ASSETS_PATH}${product.img}`} alt="Product" />

                        <div className="product--with-size__overlay">
                            {!!product?.sizes?.length &&
                                <div className="product--with-size__sizes">
                                    <p className="product--with-size__sizes__title">Select size:</p>
                                    {product?.sizes?.map((size, index) =>
                                        <span className="product--with-size__sizes__size" key={index}>{size}</span>
                                    )}
                                </div>
                            }
                        </div>
                    </div>
                    <div className="product--with-size__details">
                        <p className="product--with-size__sub-title">{product.subTitle}</p>
                        <h1 className="product--with-size__title">{product.title}</h1>
                    </div>
                </div>
            }

            {category === "product-with-cta" &&
                <div className="product product--with-cta">
                    <div className="product--with-cta__image">
                        <img src={`${ASSETS_PATH}${product.img}`} alt={product.title} />
                    </div>
                    <div className="product--with-cta__details">
                        <h3 className="product--with-cta__title">{product.title}</h3>
                        <div className="product--with-cta__sub-title">{product.subTitle}</div>
                        <div className="product--with-cta__cta">
                            <Link className="product--with-cta__cta__link" to="/spp">Shop now</Link>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    )
});