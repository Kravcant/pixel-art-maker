/* eslint-disable no-unused-vars */
import React from "react"

export default function Pad(props) {
    return (
        <button
            className="grid"
            style={{ backgroundColor: props.bgColor }}
            onClick={() => props.setBgColor(props.currentColor)}
        ></button>
    )
}
