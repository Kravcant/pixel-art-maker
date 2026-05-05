import React, { useState } from "react"
import Pad from "./Pad"
import ColorPicker from "./ColorPicker";

export default function App() {
    const pads = Array.from({ length: 256 }, (_, i) => i);

    const [currentColor, setCurrentColor] = useState("#F18D8B")

    const buttonElements = pads.map(pad => (
        <Pad key={pad} currentColor={currentColor} />
    ))

    return (
        <main>
            <ColorPicker currentColor={currentColor} setCurrentColor={setCurrentColor} />
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}