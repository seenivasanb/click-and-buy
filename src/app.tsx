import RootContext from "contexts/root-context";
import React, { Suspense } from "react";
import { render } from "react-dom";
import { HashRouter, Route, Routes } from "react-router-dom";
import RootStore from "stores";
import { MainLayout } from "./layouts";
import { HomePage, CheckoutPage, SingleProductPage, OrderConfirmationPage, LoginPage, RegisterPage, NotFoundPage } from "./pages";
import "./root.css";

/**
 * Base Template component holding the HashRouter along with all the basic routes
 * @returns {JSX.Element}
 */
const App = (): JSX.Element => (
  <React.StrictMode>
    <RootContext.Provider value={new RootStore()}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Suspense fallback="Loading..."><HomePage /></Suspense>} />
            <Route path="/login" element={<Suspense fallback="Loading..."><LoginPage /></Suspense>} />
            <Route path="/register" element={<Suspense fallback="Loading..."><RegisterPage /></Suspense>} />
            <Route path="/spp/:productId" element={<Suspense fallback="Loading..."><SingleProductPage /></Suspense>} />
            <Route path="/checkout" element={<Suspense fallback="Loading..."><CheckoutPage /></Suspense>} />
            <Route path="/order-confirm" element={<Suspense fallback="Loading..."><OrderConfirmationPage /></Suspense>} />
            <Route path="*" element={<Suspense fallback="Loading..."><NotFoundPage /></Suspense>} />
          </Route>
        </Routes>
      </HashRouter>
    </RootContext.Provider>
  </React.StrictMode>
);

render(<App />, document.getElementById("root-node"));