import React from "react";

const IconReutilizabil = ({ svgCode, width, height, fillColor}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <path
        d={svgCode}
        fill={fillColor}
      />
    </svg>
  );
};

export default IconReutilizabil;
