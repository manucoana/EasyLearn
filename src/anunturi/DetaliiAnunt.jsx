import React from "react";
import "./DetaliiAnunt.css";
import DetaliiProfil from "../profil/DetaliiProfil";
import useFetchUserData from "../profil/useFetchUserData";
import ButonReutilizabil from "../butoane/ButonReutilizabil";
import ImagineProfil from "../profil/ImagineProfil";

const DetaliiAnunt = ({ email }) => {

  const { userData } = useFetchUserData(email);

  return (
    <div className="detalii-utilizator">
      <div>
        <DetaliiProfil userData={userData} email={email} />
        <ButonReutilizabil className="buton-reutilizabil-3" text="Solicita colaborare" />
      </div>
      <ImagineProfil email={email} />
    </div>
  );
};

export default DetaliiAnunt;