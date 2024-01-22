import React from "react";
import "./DetaliiProfil.css";
import {
  NUME,
  VARSTA,
  ORAS,
  TIP_UTILIZATOR,
  EMAIL
} from "../constante/InfoUtilizatorConstant"
import useFetchUserData from "./useFetchUserData";
import TextReutilizabil from "../text/TextReutilizabil";

const DetaliiProfil = ({ email }) => {

  const { userData } = useFetchUserData(email);

  return (
    <div className="detalii-profil-items">
      <div className="text-detalii-profil">
        <TextReutilizabil className="text-reutilizabil-subliniat" text={`${NUME} ${userData.nume}`} />
        <TextReutilizabil className="text-reutilizabil-subliniat" text={`${VARSTA} ${userData.varsta}`} />
        <TextReutilizabil className="text-reutilizabil-subliniat" text={`${ORAS} ${userData.oras}`} />
        <TextReutilizabil className="text-reutilizabil-subliniat" text={`${TIP_UTILIZATOR} ${userData.tip_utilizator}`} />
        <TextReutilizabil className="text-reutilizabil-subliniat" text={`${EMAIL} ${userData.email}`} />
      </div>
    </div>
  );
}
export default DetaliiProfil;
