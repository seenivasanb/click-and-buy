import React, { Suspense } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts";
import { HomePage, CheckoutPage, SingleProductPage, OrderConfirmationPage, LoginPage, RegisterPage, NotFoundPage } from "./pages";
import "./root.css";

/**
 * Turns URL path into router basename by removing everything after the last slash
 * @param {string} path URL path, probably window.location.pathname
 * @returns {string} final basename
 */
const getBasename = (path: string): string => path.substring(0, path.lastIndexOf('/'));

/**
 * Base Template component holding all the pages and sub components
 * @returns {JSX.Element}
 */
const App = (): JSX.Element => (
  <BrowserRouter basename={getBasename(window.location.pathname)}>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Suspense fallback="Loading..."><HomePage /></Suspense>} />
        <Route path="/login" element={<Suspense fallback="Loading..."><LoginPage /></Suspense>} />
        <Route path="/register" element={<Suspense fallback="Loading..."><RegisterPage /></Suspense>} />
        <Route path="/spp" element={<Suspense fallback="Loading..."><SingleProductPage /></Suspense>} />
        <Route path="/checkout" element={<Suspense fallback="Loading..."><CheckoutPage /></Suspense>} />
        <Route path="/order-confirm" element={<Suspense fallback="Loading..."><OrderConfirmationPage /></Suspense>} />
        <Route path="*" element={<Suspense fallback="Loading..."><NotFoundPage /></Suspense>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

render(<App />, document.getElementById("root-node"));