import React from "react";

const colors = ["Red", "Green", "Blue", "Yellow", "Pink", "Maroon", "Purple"];

export default function ColorPicker({ selectedColor, setSelectedColor }) {
  return (
    <div className="color-cards">
      {colors.map((color) => (
        <div
          key={color}
          onClick={() => setSelectedColor(color)}
          className={`color-card ${selectedColor === color ? "selected" : ""}`}
          style={{
            border: selectedColor === color ? `3px solid ${color.toLowerCase()}` : "1px solid #444",
            boxShadow: selectedColor === color ? `0 0 15px ${color.toLowerCase()}` : "none",
          }}
        >
          <span style={{ color: color.toLowerCase() }}>{color}</span>
        </div>
      ))}
    </div>
  );
}
