import React from "react";
import "./DetaliiAnunt.css";
import DetaliiProfil from "../../profil/DetaliiProfil";
import useFetchUserData from "../../../user-data/useFetchUserData";
import ImagineProfil from "../../profil/ImagineProfil";
import Sfera from "../../../../layout/decor/Sfera";
import TextReutilizabil from "../../../../elemente/text/TextReutilizabil";
import ButonReutilizabil from "../../../../elemente/butoane/ButonReutilizabil";
import trimiteSolicitare from "../functii/trimiteSolicitare";

const DetaliiAnunt = ({ email, idUtilizator }) => {
  const { userData } = useFetchUserData(email);

  const handleTrimiteSolicitare = () => {
    trimiteSolicitare(idUtilizator, userData);
  };

  return (
    <div className="detalii-utilizator-items">
      <div className="detalii-container">
        <DetaliiProfil userData={userData}/>
        <ButonReutilizabil className="buton-reutilizabil-3" onClick={handleTrimiteSolicitare} text="Solicita colaborare"/>
      </div>
      <Sfera>
        <ImagineProfil userData={userData} />
        <TextReutilizabil className="text-normal" text={userData.nume} />
        <TextReutilizabil className="text-mic" text={userData.tip_utilizator} />
      </Sfera>
    </div>
  );
};

export default DetaliiAnunt;