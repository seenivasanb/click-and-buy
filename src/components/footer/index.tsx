import React, { memo } from "react";
import "./index.css"

export default memo(() => {
    console.log("Footer Component");
    return (
        <footer>
            <h3>Footer Component</h3>
        </footer>
    )
})