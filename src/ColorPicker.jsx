import React from "react"
import colorsData from "./colors"
import DefaultColors from "./DefaultColors"

export default function ColorPicker(prop) {
    const [colors, setColors] = React.useState(colorsData)
    
    function toggle(id) {
        setColors(prevColors => prevColors.map(item => {
            return item.id === id ? {...item, on: !item.on} : item
        }))
    }

    const buttonElements = colors.map(color => (
        <DefaultColors key={color.id} color={color.color}/>
    ))

    return (
        <div id="color-picker">
            <p>COLOR</p>
            <div id="current-color"></div>
            <div id="default-colors">
                {buttonElements}
            </div>
        </div>
    )
}