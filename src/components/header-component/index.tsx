import { ASSETS_PATH } from "../../configuration/variables";
import React, { memo } from "react"
import { Link } from "react-router-dom"
import "./index.css"

const displayProduct = () => {
    const showProduct = document.getElementById('js-products');
    if(showProduct && showProduct.classList.contains('hidden')) {
        showProduct.style.display = "flex";
        showProduct.classList.remove('hidden');
    }
    // } else if (showProduct && !showProduct.classList.contains('hidden') ) {
    //     showProduct.classList.add('hidden');
    //     showProduct.style.removeProperty('display');
    // }
}

const hideProductList = () => {
  const showProduct = document.getElementById('js-products');
  if (showProduct && !showProduct.classList.contains('hidden') ) {
    showProduct.classList.add('hidden');
    showProduct.style.removeProperty('display');
  }
}

const showMobileMenu = () => {
  console.log("hii");
  document.getElementsByTagName('body')[0].classList.add('mobile-view');
  displayProduct();
  // const showProduct = document.getElementById('js-products')?.classList.add('overflow-scroll');
  // const h = document.getElementsByTagName('body')[0].classList.add('overflow-hidden');
  // console.log(h);
}

const showShoppingList = () => {
  console.log("hii");
  // const shopList = document.getElementById('js-shop-list');
  // // console.log(shopList);
  // debugger;
  // if(!shopList.classList.contains('show-list')) {
  //   shopList.style.display = 'list-item';
  //   shopList.classList.add('show-list');
  // } else {
  //   shopList.style.display = 'none';
  //   shopList.classList.remove('show-list');
  // }
  

}

export default memo(() => {
    console.log("Header Component");
    return (
        <>
        <header className="header">
          <div className="bars js-bars" onClick={showMobileMenu}>&#9776;</div>
             {/* <div className="bar"></div>hideProductList
             <div className="bar"></div>
             <div className="bar"></div>
          </div>
          <div></div> */}

          <h1 className="header__logo">Click&amp;Buy</h1>
          {/* <div className="text-primary">&#128269;</div> */}

          <div className="header__nav-bar">
            
            <ul className="product-list">
            <li className="header__nav-bar-products nav-items">
            <span className="header__nav-bar-item1" id='js-nav-product' onMouseOver={displayProduct}>Products</span>
              <i className="arrow-down"></i>
                
              </li>
              <li className="header__nav-bar-signin nav-items">
                <span>SignIn</span>
              </li>      
            </ul>

            <div className="header__nav-bar-search-field nav-items">
              <input type="search" placeholder="Search for product!!"/>
              <div className="header__nav-bar-search-icon">
                <img src={`${ASSETS_PATH}/images/icon/search.png`} alt="Search Cart"/>
            </div>
            </div>
            <div className="header__nav-bar-shopping-cart">
              <img src={`${ASSETS_PATH}/images/icon/shopping-cart.png`} alt="Shopping Cart"/>
            </div>
          </div>

        </header>
        <section className="nav-products-section js-product-section" onMouseOver={displayProduct}>
        {/* <section className="nav-products-section js-product-section" onMouseOver={displayProduct} onMouseOut={hideProductList}> */}
          {/* <input type='text'/> */}
          {/* <div className="header__nav-bar-search-field nav-items">
              <input type="search" placeholder="Search for product!!"/>
              <div className="header__nav-bar-search-icon">
                <img src={`${ASSETS_PATH}/images/icon/search.png`} alt="Search Cart"/>
            </div>
            </div> */}
          <ul className="header__nav-products hidden" id="js-products">
            <li className="products-section">
            <div className="product-image">
              <img src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1642022866/assets/spa/navigation/v2/nav_larq_pitcher.jpg" alt="Header-image"/>
            </div>
            <div className="product-info">
              <p className="products-section__name">LARQ Pitcher PureVis™</p>
              <p className="products-section__desc">Brilliantly clean water beyond filtration.</p>
            </div>
          </li>
            <li className="products-section">
              <div className="product-image">
                <img src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1642022866/assets/spa/navigation/v2/nav_larq_bottle.jpg" alt="Header-image"/>
              </div>
              <div className="product-info">
                <p className="products-section__name"> LARQ Pitcher PureVis™</p>
                <p className="products-section__desc">Keeps things chilled or hot.</p>
              </div>
            </li>
            <li className="products-section">
              <div className="product-image">
                <img src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1642022866/assets/spa/navigation/v2/nav_larq_bottle_movement.jpg" alt="Header-image"/>
              </div>
              <div className="product-info">
                <p className="products-section__name">LARQ Bottle Movement PureVis™</p>
                <p className="products-section__desc">Ultra-lightweight & non-insulated.</p>
              </div>
            </li>
            <li className="products-section">
              <div className="product-image">
                <img src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1642022866/assets/spa/navigation/v2/nav_larq_bottle_filtered.jpg" alt="Header-image"/>
              </div>
              <div className="product-info">
                <p className="products-section__name">LARQ Pitcher PureVis™</p>
                <p className="products-section__desc">Brilliantly clean water beyond filtration.</p>
              </div>
            </li>
            <li className="products-section">
              <div className="products-section__shop shop-list">
                <h4 className="shop-list__items" onClick={showShoppingList}>Shop</h4>
                <ul className="shop-list__item" id="js-shop-list">
                  <li className="shop-list__items">All Products</li>
                  <li className="shop-list__items">Gift Sets</li>
                  <li className="shop-list__items">Travel Sleeve</li>
                  <li className="shop-list__items">Accessories</li>
                </ul>
              </div>

              <details className="mob-shop-list">
                 <summary><strong>Shop</strong></summary>
                 <ul className="shop-list__item">
                  <li className="shop-list__items">All Products</li>
                  <li className="shop-list__items">Gift Sets</li>
                  <li className="shop-list__items">Travel Sleeve</li>
                  <li className="shop-list__items">Accessories</li>
                </ul>
              </details>
            </li>
          </ul>
        </section>
        </>
    )
})