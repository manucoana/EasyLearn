import React from "react";
import "./ButonProfil.css"

const ButonProfil = ({ onClick }) => {
  return (
    <button className="buton-profil" onClick={onClick}>
      Profil
    </button>
  );
};

export default ButonProfil;
