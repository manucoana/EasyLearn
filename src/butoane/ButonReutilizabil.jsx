import React from "react";
import "./ButonReutilizabil.css";

const ButonReutilizabil = ({ onClick, text, color, className }) => {
  const buttonStyle = {
    backgroundColor: color,
  };

  return (
    <button className={`buton-reutilizabil ${className}`} style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButonReutilizabil;
