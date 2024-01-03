import React from "react";
import "./ButonSferic.css"; 
import IconElev from "../imagini/icons/IconElev";
import IconProfesor from "../imagini/icons/IconProfesor";

const ButonSferic = ({ tip, onSelect }) => {
  const handleClick = () => {
    onSelect(tip);
  };

  return (
    <div className={`buton-sferic-container ${tip.toLowerCase()}`}>
      <button className="buton-sferic" onClick={handleClick}>
        {tip === "Elev" ? <IconElev /> : <IconProfesor />}
      </button>
      <h1 className="text-buton-sferic">{tip}</h1>
    </div>
  );
};

export default ButonSferic;
