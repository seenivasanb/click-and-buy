import { memo } from "react";
import Checkout from "./checkout-page";
import Home from "./home-page";
import Login from "./login-page";
import NotFound from "./not-found-page";
import OrderConfirmation from "./order-confirmation-page";
import Register from "./register-page";
import SingleProduct from './single-product-page';

export const CheckoutPage = memo(Checkout);
export const HomePage = memo(Home);
export const OrderConfirmationPage = memo(OrderConfirmation);
export const SingleProductPage = memo(SingleProduct);
export const LoginPage = memo(Login);
export const RegisterPage = memo(Register);
export const NotFoundPage = memo(NotFound);