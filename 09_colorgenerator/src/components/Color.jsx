import React, { useEffect, useState } from "react";
import "./style.css";

const Color = ({ index, hex, weight, rgb }) => {
  const [copy, setCopy] = useState(false);
  const newRgb = rgb.join(",");
  const hexValue = `#${hex}`;

  const handleClick = () => {
    navigator.clipboard.writeText(hexValue);
    setCopy(true);
  };

  useEffect(() => {
    const showCopy = setTimeout(() => {
      setCopy(false);
    }, 3000);
  }, [copy]);

  return (
    <div
      onClick={handleClick}
      className="rectangle"
      style={{
        backgroundColor: `rgb(${newRgb})`,
        color: index > 9 ? "white" : null,
      }}
    >
      <p>{weight}%</p>
      <p>{hexValue}</p>
      <p style={{ color: "grey" }}>{copy ? "Copied to clipboard" : null}</p>
    </div>
  );
};

export default Color;
