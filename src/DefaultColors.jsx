/* eslint-disable no-unused-vars */
import React from "react";

export default function DefaultColors(props) {
    return (
        <button 
            style={{backgroundColor: props.color}}
            className={props.on ? "on" : undefined}
            onClick={props.onClick}
        ></button>
    )
}