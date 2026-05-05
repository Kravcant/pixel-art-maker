import React from "react"
import colorsData from "./colors"
import DefaultColors from "./DefaultColors"

export default function ColorPicker({ currentColor, setCurrentColor }) {
    const [colors, setColors] = React.useState(colorsData)

    const buttonElements = colors.map(color => (
        <DefaultColors
            key={color.id} color={color.color} onClick={() => setCurrentColor(color.color)}
        />
    ))

    return (
        <div id="color-picker">
            <p>COLOR</p>
            <div id="current-color" style={{ backgroundColor: currentColor }}></div>
            <div id="default-colors">
                {buttonElements}
            </div>
        </div>
    )
}