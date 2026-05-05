import React, { useState } from "react"
import Pad from "./Pad"
import ColorPicker from "./ColorPicker";

export default function App() {

    const pads = Array.from({ length: 256 }, (_, i) => i);
    
    const buttonElements = pads.map(pad => (
        <Pad key={pads[pad]}/>
    ))

    let currentColor = useState("#F18D8B")
    
    return (
        <main>
          <ColorPicker />
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
