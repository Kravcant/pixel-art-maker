/* eslint-disable no-unused-vars */
import React from "react"
import colorsData from "./colors"
import DefaultColors from "./DefaultColors"

export default function ColorPicker({ currentColor, setCurrentColor, onClear, padColors }) {
    const [colors, setColors] = React.useState(colorsData)

    const GRID_SIZE = 16 
    const CELL_SIZE = 20

    function exportImage() {
        // Create canvas
        const canvas = document.createElement("canvas")

        // Set size of canvas
        canvas.width = GRID_SIZE * CELL_SIZE
        canvas.height = GRID_SIZE * CELL_SIZE

        // Get drawing context 
        const ctx = canvas.getContext("2d")

        // Fill background
        ctx.fillStyle = "#FFFFFF"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Draw each pixel
        padColors.forEach((color, index) => {
            const row = Math.floor(index / GRID_SIZE)
            const col = index % GRID_SIZE

            const x = col * CELL_SIZE
            const y = row * CELL_SIZE

            ctx.fillStyle = color || "#FFFFFF"
            ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE)
        })

        // Convert canvas to PNG
        const image = canvas.toDataURL("image/png")

        // Trigger download
        const link = document.createElement("a")
        link.href = image
        link.download = "pixel-art.png"
        link.click()
    }

    const buttonElements = colors.map(color => (
        <DefaultColors
            key={color.id} color={color.color} onClick={() => setCurrentColor(color.color)}
        />
    ))

    return (
        <div id="color-picker">
            <h1>Pixel Art Editor</h1>

            <input 
                type="color" 
                value={currentColor}
                onChange={(e) => setCurrentColor(e.target.value)}>
            </input>

            <div className="default-colors">
                {buttonElements}
            </div>

            <div id="clearbtn">
                <button type="button" className="clear-button" onClick={onClear}>Clear</button>
            </div>

            <div>
                <button type="button" className="export-button" onClick={exportImage}>Export</button>
            </div>

            <p>Click any cell on the grid to paint it with the current color.</p>
            <p>Click Clear to clear the grid, click Export to export your art.</p>
        </div>
    )
}