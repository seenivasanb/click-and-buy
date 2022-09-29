import React, { useState } from 'react'
import './index.css'

type Props = {
    title: any,
    content: any,
    defaultStatus: boolean
}
export default ({ title, content, defaultStatus }: Props) => {

    const [isOpen, setOpen] = useState(defaultStatus || false);
    const toggleOpen = () => { setOpen(value => !value) }

    return (
        <div className={`expender ${isOpen ? 'open' : ''}`}>
            <div className="expender__title" onClick={toggleOpen}>{title}</div>
            <div className="expender__content">
                {content}
            </div>
        </div>
    )
}