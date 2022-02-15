import { ASSETS_PATH } from "../../configuration/variables";
import React, { Fragment, memo } from 'react'
import "./index.css"
import { Link } from "react-router-dom";
import { ProductCategoryType, ProductSizeType, ProductType } from "../../types/products";

type Props = {
    category: ProductCategoryType,
    product: ProductType,
    size?: ProductSizeType
}

/**
 * Base Template component holding the HashRouter along with all the basic routes
 * @param category - specifies the type of the product that will be [productWithCTA, productWithSize, productTwoColumns]
 * @param size - specifies the size of the product that will be [small, medium, large]
 * @param products - array of objects that contains the list of products details
 * @returns {JSX.Element}
 */
export default memo(({ category, product, size }: Props) => {
    console.log('Product component');

    return (
        <Fragment>
            {category === "product-with-size" &&
                <div className={`product size-${size}`} key={product.id}>
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
                        <h1 className="product__title">{product.title}</h1>
                    </div>
                </div>
            }

            {category === "product-with-cta" &&
                <div className={`product-tile size-${size}`}>
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