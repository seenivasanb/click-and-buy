import React, { memo } from "react"
import "./index.css"

type Props = {
    page: JSX.Element
}

export default memo((prop: Props) => {
    console.log("Container Component");
    return (
        <section className="wrapper">
            {prop.page}
        </section>
    )
})