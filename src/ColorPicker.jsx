/* eslint-disable no-unused-vars */
import React from "react"
import colorsData from "./colors"
import DefaultColors from "./DefaultColors"

export default function ColorPicker({ currentColor, setCurrentColor, onClear }) {
    const [colors, setColors] = React.useState(colorsData)

    const buttonElements = colors.map(color => (
        <DefaultColors
            key={color.id} color={color.color} onClick={() => setCurrentColor(color.color)}
        />
    ))

    return (
        <div id="color-picker">
            <h3>Pick a color:</h3>

            <input 
                type="color" 
                value={currentColor}
                onChange={(e) => setCurrentColor(e.target.value)}>
            </input>

            <div className="default-colors">
                {buttonElements}
            </div>

            <div id = "clearbtn">
                <button type="button" onClick={onClear}>Clear</button>
            </div>
        </div>
    )
}