import React from "react";
import ButonReutilizabil from "../../elemente/butoane/ButonReutilizabil";

const SolicitaColaborare = ({ onClick }) => {
  
  return (
    <ButonReutilizabil
      className="buton-reutilizabil-3"
      onClick={onClick}
      text="Solicita colaborare"
    />
  );
};

export default SolicitaColaborare;
