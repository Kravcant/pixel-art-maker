/* eslint-disable no-unused-vars */
import React from "react"

export default function Pad(props) {
    return (
        <button 
            style={{backgroundColor: "white"}}
            className={props.on ? "on" : undefined}
            // onClick={() => props.toggle(props.id)}
        ></button>
    )
}