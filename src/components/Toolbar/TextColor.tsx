import React, { useState } from "react";

function TextColor() {
  const [color, setColor] = useState("#00a0b0");

  return (
    <button className="btn btn-square btn-sm gap-2 ml-2">
      <input
        type="color"
        className="w-8 h-8 p-0 border-none bg-transparent cursor-pointer"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </button>
  );
}

export default TextColor;
