import React from "react";
import "./ButonReutilizabil.css";

const ButonReutilizabil = ({ onClick, text, className }) => {

  return (
    <button className={`${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButonReutilizabil;
