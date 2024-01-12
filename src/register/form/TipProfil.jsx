import React from "react";
import "./TipProfil.css";
import ButonSferic from "../../butoane/ButonSferic";
import { TITLU_INREGISTRARE, SELECTEAZA_INREGISTRARE } from "../../constante/TitluConstant";
import TextReutilizabil from "../../text/TextReutilizabil";

const TipProfil = ({ onSelect }) => {
  const titluInregistrare = TITLU_INREGISTRARE;
  const selecteaza = SELECTEAZA_INREGISTRARE;

  const handleProfilSelect = (selectedProfil) => {
    onSelect(selectedProfil);
  };

  return (
    <div className="tip-profil-items">
      <div className="text-tip-profil">
        <TextReutilizabil className="text-reutilizabil-5" text={titluInregistrare} />
        <TextReutilizabil className="text-reutilizabil-4" text={selecteaza} />
      </div>
      <div className="butoane-descriere">
        <ButonSferic onSelect={handleProfilSelect} tip="Elev" />
        <ButonSferic onSelect={handleProfilSelect} tip="Profesor" />
      </div>
    </div>
  );
};

export default TipProfil;