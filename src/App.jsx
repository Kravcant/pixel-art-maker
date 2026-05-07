/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import Pad from "./Pad"
import ColorPicker from "./ColorPicker";

export default function App() {
    const pads = Array.from({ length: 256 }, (_, i) => i);

    const [currentColor, setCurrentColor] = useState("#000000")
    const [padColors, setPadColors] = useState(Array(256).fill(""))

    function clearPads() {
        setPadColors(Array(256).fill(""))
    }

    const buttonElements = pads.map(pad => (
        <Pad
            key={pad}
            currentColor={currentColor}
            bgColor={padColors[pad]}
            setBgColor={(color) => setPadColors(prev => {
                const updated = [prev]
                updated[pad] = color
                return updated
            })}
        />
    ))

    return (
        <main>
            <ColorPicker currentColor={currentColor} setCurrentColor={setCurrentColor} onClear={clearPads} />
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
