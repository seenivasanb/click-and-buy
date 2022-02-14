import { memo } from "react";
import Header from "./header-component";
import Product from "./product-component";
import ProductList from "./product-list-component";
import Container from "./container-component";
import Footer from "./footer";

export const HeaderComponent = memo(Header);
export const FooterComponent = memo(Footer);
export const ContainerComponent = memo(Container);
export const ProductComponent = memo(Product);
export const ProductListComponent = memo(ProductList);