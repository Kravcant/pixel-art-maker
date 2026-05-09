/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import Pad from "./Pad"
import ColorPicker from "./ColorPicker";

export default function App() {
    const pads = Array.from({ length: 256 }, (_, i) => i);

    const [currentColor, setCurrentColor] = useState("#000000")
    const [padColors, setPadColors] = useState(Array(256).fill(""))
    const [isMouseDown, setIsMouseDown] = useState(false)

    useEffect(() => {
        const handleMouseUp = () => setIsMouseDown(false)
        window.addEventListener("mouseup", handleMouseUp)
        return () => window.removeEventListener("mouseup", handleMouseUp)
    }, [])

    function clearPads() {
        setPadColors(Array(256).fill(""))
    }

    function paintPad(index) {
        setPadColors(prev => {
            const updated = [...prev]
            updated[index] = currentColor
            return updated
        })
    }

    const buttonElements = pads.map(pad => (
        <Pad
            key={pad}
            color={padColors[pad]}
            onMouseDown={() => { setIsMouseDown(true); paintPad(pad) }}
            onMouseEnter={() => { if (isMouseDown) paintPad(pad) }}
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