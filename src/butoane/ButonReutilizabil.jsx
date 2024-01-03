import React from "react";
import "./ButonReutilizabil.css";

const ButonReutilizabil = ({ onClick, text, color }) => {
  const buttonStyle = {
    backgroundColor: color,
  };

  return (
    <button className="buton-reutilizabil" style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButonReutilizabil;