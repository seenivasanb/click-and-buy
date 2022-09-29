import { memo } from "react";
import Header from "./header-component";
import Product from "./product-component";
import ProductList from "./product-list-component";
import Container from "./container-component";
import Footer from "./footer";
import Cart from "./cart-overlay-component";
import CartItemList from "./cart-item-list-component";
import CartTotal from "./cart-total-component";
import AddToBag from "./add-to-bag-component";
import Expender from "./expender-component";


import Form from "./form-component";
import Input from "./form-elements/form-input";

export const HeaderComponent = memo(Header);
export const FooterComponent = memo(Footer);
export const ContainerComponent = memo(Container);
export const ProductComponent = memo(Product);
export const ProductListComponent = memo(ProductList);
export const CartComponent = memo(Cart);
export const CartItemListComponent = memo(CartItemList);
export const CartTotalComponent = memo(CartTotal);
export const AddToBagComponent = memo(AddToBag);
export const ExpenderComponent = memo(Expender);

export const FormComponent = memo(Form);
export const FormInput = memo(Input);