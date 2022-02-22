import { ASSETS_PATH } from "../../configuration/variables";
import React, { memo } from "react"
import "./index.css"
import { Link } from "react-router-dom";


export default memo(() => {
    console.log("SPP Page");

    return (
        <div className="sppcontainer">
            <div className="productpage">
                <div className="productpage__image">
                    <img src={`${ASSETS_PATH}/images/spp-product-1.jpg`} alt="Product" />
                </div>
                <div className="productpage__details">
                    <h2>LARQ Bottle PureVi</h2>
                    <p className="productpage__details__price">$118.00</p>
                    <p>Or 4 interest-free installments of $23.75</p>
                    <div className="productpage__details__ratingimage flex">
                        <span><img src={`${ASSETS_PATH}/images/star.svg`} alt="Product" /></span><span><img src={`${ASSETS_PATH}/images/star.svg`} alt="Product" /></span><span><img src={`${ASSETS_PATH}/images/star.svg`} alt="Product" /></span><span><img src={`${ASSETS_PATH}/images/star.svg`} alt="Product" /></span>
                        <div className="productpage__ratingimage__ratingnumber">2709 reviews</div>
                    </div>
                    <p>Color: Seaside Mint</p>
                    <div className="productpage__selectbutton">
                        <form>
                            <input className="productpage__selectbutton__radiobtn" type="radio" id="fname" value="17 oz" name="ghjfgh"></input>
                            <input className="productpage__selectbutton__radiobtn" type="radio" id="fname" value="25 oz"></input>
                            <input className="productpage__selectbutton__radiobtn" type="radio" id="fname" value="17 oz" name="ghjfgh"></input>
                            <input className="productpage__selectbutton__radiobtn" type="radio" id="fname" value="25 oz"></input>
                        </form>
                    </div>

                    <div className="productpage__size">
                        Size:
                        <form>
                            <input className="productpage__size__quantity" type="text" id="fname" value="17 oz" name="ghjfgh"></input>
                            <input className="productpage__size__quantity" type="text" id="fname" value="25 oz"></input>
                        </form>
                    </div>
                    <div className="productpage__customise">
                        <form>
                            <input className="productpage__customise__personalize" type="text" id="fname" value="Personalize" name="ghjfgh"></input>
                            <input className="productpage__customise__addtocart" type="text" id="fname" value="Add to cart"></input>
                            <p className="productpage__customise__tagline">12-month warranty 100% secure checkout
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <div className="benifits">
                <p className="benifits__points">Brilliantly clean water</p>
                <p className="benifits__points">Self-cleaning</p>
                <p className="benifits__points">24 hours cold and 12 hours hot</p>
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
    )
});