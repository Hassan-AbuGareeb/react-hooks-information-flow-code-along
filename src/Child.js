import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, onChildChangeColor, childColor }) {
  return (
    <div
      className="child"
      style={{ backgroundColor: childColor }}
      onClick={() => {
        onChangeColor();
        onChildChangeColor();
      }}
    />
  );
}

export default Child;
