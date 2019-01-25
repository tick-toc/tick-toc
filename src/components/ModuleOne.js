import React from 'react'

const Wire = (props) => {
    const { color, cut } = props
    return (
        <path stroke={color} />
    )
}

export default Wire