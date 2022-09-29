import React, { memo } from "react";
import "./index.css"

export default memo(() => {
    console.log("Footer Component");
    return (
        <footer>
            <div className="footer">
                <div className="footer__main">
                    <div>
                    <h3>Help</h3>
                    <ul>
                        <li>FAQ</li>
                        <li>My Account</li>
                        <li>Reviews</li>
                        <li>Contact US</li>
                    </ul>
                    </div>
                    <div>
                    <h3>Shop</h3>
                    <ul>
                        <li>Gift Sets</li>
                        <li>Accessories</li>
                        <li>Bottles</li>
                        <li>Travel Sleeves</li>
                    </ul>
                    </div>
                    <div>
                    <h3>About</h3>
                    <ul>
                        <li>Press</li>
                        <li>Our Story</li> 
                        <li>Technologu</li>
                        <li>Magazine</li>
                    </ul>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div>
                    <span>&copy;2020 Click&amp;Buy. All Rights Reserved</span>
                    </div>
                    <div>
                    <a href="#">Terms&amp;Policies</a>
                    </div>
                </div>
            </div>
        </footer>
    )
})