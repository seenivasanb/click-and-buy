import { ProductListComponent } from "components"
import { ASSETS_PATH } from "configuration/variables"
import { PRODUCTS } from "mock-data/products"
import React, { memo } from "react"
import { ProductCategoryType } from "types/products"
import "./index.css"

export default memo(() => {
  return (
    <div className="ocp-wrp clearfix">
      <div className="ocp-wrp__main-column">
        <section className="order-confirmation">
          <h2>Thank you for your purchase!</h2>
          <span><strong>Order ID: 1234567890</strong></span>
          <p>Hi User, we received your order and working on it. Your order will be delivered in 3 to 4 working days.</p>
        </section>
        <section>
          <h2>Order Summary</h2>
          <table className="product-list">
            <tbody>
              <tr className="product-list__item">
                <td className="product-list__data product-list__data--img"><img src={`${ASSETS_PATH}/images/Product_list_images/filtered-17-ob-3.jpg`} /></td>
                <td className="product-list__data">Sample bottle description</td>
                <td className="product-list__data">1</td>
                <td className="product-list__data">$38.40</td>
              </tr>
              <tr className="product-list__item">
                <td className="product-list__data product-list__data--img"><img src={`${ASSETS_PATH}/images/Product_list_images/filtered-17-ob-3.jpg`} /></td>
                <td className="product-list__data">Sample bottle description</td>
                <td className="product-list__data">1</td>
                <td className="product-list__data">$38.40</td>
              </tr>
            </tbody>
          </table>
          <div className="summary clearfix">
            <div className="summary__detail">
              <p>Billing Address:</p>
              <address>
                <p>jkjkljkljk,</p>
                <p>jkjkljkljkfdgfdgfh,</p>
                <p>jkjkljkljkfgfdg,</p>
                <p>jkjkljkljk.</p>
              </address>
            </div>
            <table className="summary__detail summary__detail--right">
              <tbody>
                <tr>
                  <td>Cart total:</td>
                  <td>$76.80</td>
                </tr>
                <tr>
                  <td>Tax:</td>
                  <td>$2.20</td>
                </tr>
                <tr>
                  <td>Shipping fee:</td>
                  <td>$30</td>
                </tr>
                <tr>
                  <td><strong>Total:</strong></td>
                  <td><strong>$108.00</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="continue-shopping">
            <a href="/" className="continue-shopping__btn">One more click</a>
          </div>
        </section>
      </div>
      <div className="ocp-wrp__sidebar">
        <h2>Recommended Products</h2>
        <ProductListComponent
          category={ProductCategoryType.productWithSize}
          products={PRODUCTS.slice(0, 3)}
          direction="row"
        />
      </div>
    </div>
  )
})