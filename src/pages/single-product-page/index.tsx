import AddToBagComponent from "components/add-to-bag-component";
import ExpenderComponent from "components/expender-component";
import { ASSETS_PATH } from "configuration/constants";
import { MOCK_PRODUCTS } from "mock-data/products";
import React, { memo } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import "./index.css";

export default memo(() => {
    console.log("SPP Page");

    let { productId } = useParams();
    let [searchParams, setSearchParams] = useSearchParams();

    const product = MOCK_PRODUCTS.find(product => product.productId === productId);
    const currentSkuId = searchParams.get('skuId') || product?.defaultSkuId || "";
    const currentSku = product?.skus.find(skus => skus.skuId === currentSkuId) || product?.skus.find(skus => skus.skuId === product?.defaultSkuId);
    const currentSizeId = searchParams.get('sizeId') || product?.defaultSizeId || "";
    const currentSize = currentSku?.sizes.find(size => size.sizeId === currentSizeId) || currentSku?.sizes[0];
    console.log(currentSku, currentSize);

    return (
        <div className="spp">
            <div className="spp__image-panel">
                <div className="spp__image">
                    <img src={`${ASSETS_PATH}/images/spp-product-1.jpg`} alt="Product" />
                </div>
                <div className="spp__benefits">
                    <p className="spp__benefits__points">Brilliantly clean water</p>
                    <p className="spp__benefits__points">Self-cleaning</p>
                    <p className="spp__benefits__points">24 hours cold and 12<br /> hours hot</p>
                </div>
                <div className="product-samples">
                    <div className="product-samples_image">
                        <span className="product-samples_image__first"><img src={`${ASSETS_PATH}/images/spp-product-1-sample-1.jpg`} alt="Product" /></span>
                        <span className="roduct-samples_image__first"><img src={`${ASSETS_PATH}/images/spp-product-1-sample-2.jpg`} alt="Product" /></span>
                    </div>
                    <div className="product-samples_image">
                        <span className="product-samples_image__first"><img src={`${ASSETS_PATH}/images/spp-product-1-sample-3.jpg`} alt="Product" /></span>
                        <span className="product-samples_image__first"><img src={`${ASSETS_PATH}/images/spp-product-1-sample-4.jpg`} alt="Product" /></span>
                    </div>
                    <div className="product-samples_image">
                        <span className="product-samples_image__first"><img src={`${ASSETS_PATH}/images/spp-product-1-sample-5.jpg`} alt="Product" /></span>
                        <span className="product-samples_image__first"><img src={`${ASSETS_PATH}/images/spp-product-1-sample-6.jpg`} alt="Product" /></span>
                    </div>
                </div>
            </div>
            <div className="spp__details">
                <h1 className="spp__title">{product?.name}</h1>
                <p className="spp__price"><span className="spp__price__actual">{currentSize?.price.actual}</span> {currentSize?.price.current}</p>
                <p className="spp__installment-text">Or 4 interest-free installments of $23.75</p>

                <div className="spp__ratings">
                    <div className="spp__rating-star">
                        <img src={`${ASSETS_PATH}/images/star.svg`} alt="Product" />
                    </div>
                    <div className="spp__rating-star">
                        <img src={`${ASSETS_PATH}/images/star.svg`} alt="Product" />
                    </div>
                    <div className="spp__rating-star">
                        <img src={`${ASSETS_PATH}/images/star.svg`} alt="Product" />
                    </div>
                    <div className="spp__rating-star">
                        <img src={`${ASSETS_PATH}/images/star.svg`} alt="Product" />
                    </div>
                    <div className="spp__rating-star">
                        <img src={`${ASSETS_PATH}/images/star.svg`} alt="Product" />
                    </div>
                    <div className="spp__rating-count">2709 reviews</div>
                </div>

                <div className="spp__shades">
                    <p className="spp__shades__name">Color: {currentSku?.shadeName}</p>
                    {product?.skus?.map(sku => {
                        return <button onClick={() => setSearchParams({ skuId: sku.skuId, sizeId: currentSizeId })} key={sku.skuId} className={`spp__shades__btn ${sku.skuId === currentSku?.skuId ? "active" : ""} ${sku.inventoryStatus > 1 ? "disabled" : ""}`}>
                            <div className="spp__shades__btn__color" data-sku-id={currentSku?.skuId}></div>
                        </button>
                    })}
                </div>

                <div className="spp__sizes">
                    <div className="spp__sizes__name">Size:</div>
                    <div className="spp__sizes__quantity">
                        {currentSku?.sizes?.map(size => {
                            return <button onClick={() => setSearchParams({ skuId: currentSkuId, sizeId: size.sizeId })} key={size.sizeId} className={`spp__sizes__quantity-btn ${size.sizeId === currentSize?.sizeId ? "active" : ""}`}>{size.size}</button>
                        })}
                    </div>
                </div>
                <div className="spp__button">
                    <AddToBagComponent product={product} quantity={0} />
                </div>

                <ExpenderComponent
                    defaultStatus={true}
                    title={"Product Description"}
                    content={
                        <p>
                            The LARQ Bottle PureVis™ is the world's first self-cleaning water bottle and water purification system. It uses PureVis technology to eliminate up to 99%* of bio-contaminants such as E. coli from your water and bottle. <br /> <br />
                            *Based on elimination 99.8% of E.coli in a 20-second cycle for all LARQ Bottles. <br /> <br />
                            *For water purification without the weight, shop our single-wall non-insulated LARQ Bottle Movement PureVis.
                        </p>
                    }
                />
            </div>
        </div>
    )
});