import React from 'react'
import './index.scss'

const Heading = ({children, h1Display}) => {
    return (
        <h1 style={{display: `${h1Display}`}}>
            {children}
        </h1>
    )
}

export default Heading
