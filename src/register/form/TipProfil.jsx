import React from "react";
import "./TipProfil.css";
import ButonSferic from "../../butoane/ButonSferic";
import { TITLU_INREGISTRARE, SELECTEAZA_INREGISTRARE } from "../../constante/TitluConstant";
import TextReutilizabil from "../../text/TextReutilizabil";

const TipProfil = ({ onSelect }) => {
  const titluInregistrare = TITLU_INREGISTRARE;
  const selecteaza = SELECTEAZA_INREGISTRARE;

  const selectareTipProfil = (selectedProfil) => {
    onSelect(selectedProfil);
    console.log(selectedProfil);
  };

  return (
    <div className="tip-profil-items">
      <div className="text-tip-profil">
        <TextReutilizabil className="text-titlu-secundar" text={titluInregistrare} />
        <TextReutilizabil className="text-normal" text={selecteaza} />
      </div>
      <div className="butoane-descriere">
        <ButonSferic onSelect={selectareTipProfil} tip="Elev" />
        <ButonSferic onSelect={selectareTipProfil} tip="Profesor" />
      </div>
    </div>
  );
};

export default TipProfil;