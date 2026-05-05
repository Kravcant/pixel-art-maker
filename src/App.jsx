import React from "react"
// import padsData from "./pads"
import Pad from "./Pad"

export default function App() {
    // const [pads, setPads] = React.useState(padsData)
    
    // function toggle(id) {
    //     setPads(prevPads => prevPads.map(item => {
    //         return item.id === id ? {...item, on: !item.on} : item
    //     }))
    // }

    const pads = Array.from({ length: 400 }, (_, i) => i);
    
    const buttonElements = pads.map(pad => (
        <Pad key={pads[pad]}/>
    ))
    
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
