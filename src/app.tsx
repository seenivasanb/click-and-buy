import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts';
import { HomePage, CheckoutPage, SingleProductPage, OrderConfirmationPage, LoginPage, RegisterPage, NotFoundPage } from './pages';
import './root.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/spp' element={<SingleProductPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/order-confirmation' element={<OrderConfirmationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={NotFoundPage} />
      </Route>
    </Routes>
  </BrowserRouter>
);

render(<App />, document.getElementById('root-node'));