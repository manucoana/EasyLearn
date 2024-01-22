import React from "react";
import "./ButonSferic.css";
import IconElev from "../imagini/icons/IconElev";
import IconProfesor from "../imagini/icons/IconProfesor";
import TextReutilizabil from "../text/TextReutilizabil";

const ButonSferic = ({ tip, onSelect }) => {
  const handleClick = () => {
    onSelect(tip);
  };

  return (
    <div className={`buton-sferic-container ${tip.toLowerCase()}`}>
      <button className="buton-sferic" onClick={handleClick}>
        {tip === "Elev" ? <IconElev /> : <IconProfesor />}
      </button>
      <div className="text-buton-sferic">
      <TextReutilizabil className="text-subtitlu-albastru" text={tip} />
      </div>
    </div>
  );
};

export default ButonSferic;
