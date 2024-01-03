import React, { useState } from "react";
import "./TipProfil.css";
import ButonSferic from "../../butoane/ButonSferic";

const TipProfil = ({ onSelect }) => {
  const [profil, setProfil] = useState('');

  const handleProfilSelect = (selectedProfil) => {
    setProfil(selectedProfil);
    onSelect(selectedProfil);
  };

  return (
    <div className="selectare-container">
      <h1>INREGISTRARE</h1>
      <h2>Selecteaza tipul de profil:</h2>
      <div className="container-butoane-descriere">
        <div className="div-buton-elev">
          <ButonSferic onSelect={handleProfilSelect} tip="Elev" />
        </div>
        <div className="div-buton-profesor">
          <ButonSferic onSelect={handleProfilSelect} tip="Profesor" />
        </div>
      </div>
    </div>
  );
};

export default TipProfil;
