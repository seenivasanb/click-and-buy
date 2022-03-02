import { lazy } from "react";

export const LoginForm = lazy(() => import("./login-form"));
export const RegisterForm = lazy(() => import("./register-form"));
export const ShippingForm = lazy(() => import("./shipping-form"));
export const PaymentForm = lazy(() => import("./payment-form"));