import React from "react";
import "./DetaliiAnunt.css";
import DetaliiProfil from "../../profil/detalii/DetaliiProfil";
import useFetchUserData from "../../../user-data/useFetchUserData";
import ButonReutilizabil from "../../../../elemente/butoane/ButonReutilizabil";
import trimiteSolicitare from "../functii/trimiteSolicitare";
import ImagineProfil from "../../profil/imagine/ImagineProfil";

const DetaliiAnunt = ({ email, idUtilizator }) => {
  const { userData: profesorSelectatData } = useFetchUserData(email);

  const handleTrimiteSolicitare = () => {
    trimiteSolicitare(idUtilizator, profesorSelectatData);
  };

  return (
    <div className="detalii-utilizator-items">
      <ImagineProfil userData={profesorSelectatData} />
      <div className="detalii-container">
        <DetaliiProfil userData={profesorSelectatData} />
        <ButonReutilizabil className="buton-reutilizabil-3" onClick={handleTrimiteSolicitare} text="Solicita colaborare" />
      </div>
    </div>
  );
};

export default DetaliiAnunt;