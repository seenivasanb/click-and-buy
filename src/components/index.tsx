import { memo } from "react";
import Header from "./header-component";
import Product from "./product-component";
import ProductList from "./product-list-component";
import Container from "./container-component";
import Footer from "./footer";

import Form from "./form-component";
import Input from "./form-elements/form-input";


import Todo from "./todo-component";

export const HeaderComponent = memo(Header);
export const FooterComponent = memo(Footer);
export const ContainerComponent = memo(Container);
export const ProductComponent = memo(Product);
export const ProductListComponent = memo(ProductList);

export const FormComponent = memo(Form);
export const FormInput = memo(Input);


export const TodoComponent = Todo;