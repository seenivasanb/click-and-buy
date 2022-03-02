import { ASSETS_PATH } from "configuration/variables";
import { LoginForm, PaymentForm, ShippingForm } from "forms";
import RegisterForm from "forms/register-form";
import React, { memo, Suspense, useCallback, useEffect, useState } from "react"
import "./index.css"

export default memo(() => {
    console.log("Checkout Page");

    const [activeStepNumber, setActiveStepNumber] = useState(1);
    const [validSteps, setValidSteps] = useState<number[]>([0]);

    const setActiveStepByNumber = useCallback((value: number) => {
        console.log("setActiveStepByNumber", validSteps);
        if (validSteps?.some(step => step === (value - 1))) {
            setActiveStepNumber(value)
        }
    }, [validSteps, activeStepNumber]);

    useEffect(() => {
        setActiveStepByNumber(activeStepNumber + 1);
    }, [validSteps])

    const loginOnSubmit = useCallback((data: any) => {
        setValidSteps(value => [...value, 1]);
        // alert(JSON.stringify(data, null, 2));
    }, [validSteps, activeStepNumber]);

    const registerOnSubmit = useCallback((data: any) => {
        setValidSteps(value => [...value, 1]);
        alert(JSON.stringify(data, null, 2));
    }, []);

    const shippingOnSubmit = useCallback((data: any) => {
        setValidSteps(value => [...value, 2]);
        alert(JSON.stringify(data, null, 2));
    }, []);

    const billingOnSubmit = useCallback((data: any) => {
        setValidSteps(value => [...value, 3]);
        alert(JSON.stringify(data, null, 2));
    }, []);

    const paymentOnSubmit = useCallback((data: any) => {
        alert(JSON.stringify(data, null, 2));
    }, []);


    const [isExistingUser, setIsExistingUser] = useState(false);
    const toggleCustomerLogin = () => {
        setIsExistingUser(value => value ? false : true);
    }

    return (
        <section className="checkout-page">
            <div className="checkout-page__checkout-flow">
                <div className="steps">
                    <div className={`step ${activeStepNumber === 1 ? "active" : ""}`}>
                        <div className="step__header" onClick={() => setActiveStepByNumber(1)}>
                            <div className="step__header__status">1</div>
                            <div className="step__header__title">Customer</div>
                        </div>
                        <div className="step__content">
                            {activeStepNumber === 1
                                ? <div className="customer">
                                    {isExistingUser
                                        ? (<div>
                                            <Suspense fallback="Loading...">
                                                <RegisterForm
                                                    formName={"register-form"}
                                                    onSubmit={registerOnSubmit}
                                                    submitButtonName={"Continue"}
                                                />
                                            </Suspense>
                                            <div className="link">
                                                Already have an account? <span onClick={toggleCustomerLogin}>Login</span>
                                            </div>
                                        </div>)
                                        : (<div>
                                            <Suspense fallback="Loading...">
                                                <LoginForm
                                                    formName={"login-form"}
                                                    onSubmit={loginOnSubmit}
                                                    submitButtonName={"Continue"}
                                                />
                                            </Suspense>
                                            <div className="link">
                                                Don't have an account? <span onClick={toggleCustomerLogin}>Register</span>
                                            </div>
                                        </div>)
                                    }
                                </div>
                                : ""
                            }
                        </div>
                    </div>
                    <div className={`step ${activeStepNumber === 2 ? "active" : ""}`}>
                        <div className="step__header" onClick={() => setActiveStepByNumber(2)}>
                            <div className="step__header__status">2</div>
                            <div className="step__header__title">Shipping</div>
                        </div>
                        <div className="step__content">
                            {activeStepNumber === 2
                                ? <div className="shipping">
                                    <Suspense fallback="Loading...">
                                        <ShippingForm
                                            formName={"shipping-form"}
                                            onSubmit={shippingOnSubmit}
                                            submitButtonName={"Continue"}
                                        />
                                    </Suspense>
                                </div>
                                : ""
                            }
                        </div>
                    </div>
                    <div className={`step ${activeStepNumber === 3 ? "active" : ""}`}>
                        <div className="step__header" onClick={() => setActiveStepByNumber(3)}>
                            <div className="step__header__status">3</div>
                            <div className="step__header__title">Billing</div>
                        </div>
                        <div className="step__content">
                            {activeStepNumber === 3
                                ? <div className="billing">
                                    <Suspense fallback="Loading...">
                                        <ShippingForm
                                            formName={"billing-form"}
                                            onSubmit={billingOnSubmit}
                                            submitButtonName={"Continue"}
                                        />
                                    </Suspense>
                                </div>
                                : ""
                            }
                        </div>
                    </div>
                    <div className={`step ${activeStepNumber === 4 ? "active" : ""}`}>
                        <div className="step__header" onClick={() => setActiveStepByNumber(4)}>
                            <div className="step__header__status">4</div>
                            <div className="step__header__title">Payment</div>
                        </div>
                        <div className="step__content">
                            {activeStepNumber === 4 ?
                                <Suspense fallback="Loading...">
                                    <PaymentForm
                                        formName={"payment-form"}
                                        onSubmit={paymentOnSubmit}
                                        submitButtonName={"Place order"}
                                    />
                                </Suspense>
                                : ""
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="checkout-page__order-summary">
                <div className="order-summary">
                    <div className="order-summary__title">Order Summary</div>

                    <div className="order-summary__product-list product-list">
                        <div className="order-summary__product-item product-item">
                            <div className="product-item__image">
                                <img src={`${ASSETS_PATH}/images/products/product-1.jpg`} alt="" />
                            </div>
                            <div className="product-item__content">
                                <div className="product-item__name">2 x LARQ Bottle PureVis</div>
                                <div className="product-item__size">Size 17 oz</div>
                                <div className="product-item__shade">Color Seaside Mint</div>
                                <div className="product-item__auto-replenishment">Frequency Ships every 2 months</div>
                            </div>
                            <div className="product-item__price">$190.00</div>
                        </div>
                        <div className="order-summary__product-item product-item">
                            <div className="product-item__image">
                                <img src={`${ASSETS_PATH}/images/products/product-3.jpg`} alt="" />
                            </div>
                            <div className="product-item__content">
                                <div className="product-item__name">1 x LARQ Bottle Filtered</div>
                                <div className="product-item__size">Size 25 oz</div>
                                <div className="product-item__shade">Color Granite White</div>
                                <div className="product-item__auto-replenishment">Personalize No</div>
                            </div>
                            <div className="product-item__price">$48.95</div>
                        </div>
                    </div>

                    <div className="order-summary__total-summary total-summary">
                        <div className="total-summary__item sub-total">
                            <div className="total-summary__item__name">Subtotal</div>
                            <div className="total-summary__item__value">$238.95</div>
                        </div>
                        <div className="total-summary__item">
                            <div className="total-summary__item__name">Shipping</div>
                            <div className="total-summary__item__value">Free</div>
                        </div>
                        <div className="total-summary__item tax">
                            <div className="total-summary__item__name">Tax</div>
                            <div className="total-summary__item__value">$23.90</div>
                        </div>
                    </div>
                    <div className="order-summary__cart-total cart-total">
                        <div className="cart-total__name">Total (USD)</div>
                        <div className="cart-total__value">$262.85</div>
                    </div>
                </div>
            </div>
        </section>
    )
});