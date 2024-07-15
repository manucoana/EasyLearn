import React from "react";
import "./ButonReutilizabil.css";

const ButonReutilizabil = ({ onClick, onMouseEnter, onMouseLeave, text, className, onProfessorClick,profesorData }) => {

  return (
    <button
      className={`${className}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onProfessorClick={onProfessorClick}
      profesorData={profesorData}
    >
      {text}
    </button>
  );
};

export default ButonReutilizabil;
