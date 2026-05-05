/* eslint-disable no-unused-vars */
import React, { useState } from "react"

export default function Pad(props) {
    const [color, setColor] = useState("")

    function handleClick() {
        setColor(props.currentColor)
    }

    return (
        <button
            className="grid"
            style={{ backgroundColor: color }}
            onClick={handleClick}
        ></button>
    )
}