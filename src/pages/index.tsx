import { lazy, memo } from "react";
import Home from "./home-page";

export const HomePage = memo(Home);
export const CheckoutPage = lazy(() => import("./checkout-page"));
export const SingleProductPage = lazy(() => import("./single-product-page"));
export const OrderConfirmationPage = lazy(() => import("./order-confirmation-page"));
export const LoginPage = lazy(() => import("./login-page"));
export const RegisterPage = lazy(() => import("./register-page"));
export const NotFoundPage = lazy(() => import("./not-found-page"));