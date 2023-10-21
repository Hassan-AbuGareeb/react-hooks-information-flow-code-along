import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const [color, setColor] = useState(getRandomColor());
  const [childColor, setChildColor] = useState(getRandomColor());
  function handleChangeColor() {
    const newColor = getRandomColor();
    setColor(newColor);
  }

  function handleChildChangeColor() {
    const newColor = getRandomColor();
    setChildColor(newColor);
  }
  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child
        onChangeColor={handleChangeColor}
        childColor={childColor}
        onChildChangeColor={handleChildChangeColor}
      />
      <Child
        onChangeColor={handleChangeColor}
        childColor={childColor}
        onChildChangeColor={handleChildChangeColor}
      />
    </div>
  );
}

export default Parent;
