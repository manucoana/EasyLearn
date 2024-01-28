import React from "react";
import "./DetaliiProfil.css";
import {
  NUME,
  VARSTA,
  ORAS,
  TIP_UTILIZATOR,
  EMAIL
} from "../../../elemente/constante/InfoUtilizatorConstant"
import TextReutilizabil from "../../../elemente/text/TextReutilizabil";

const DetaliiProfil = ({ userData }) => {

  return (
    <div className="detalii-profil-items">
      <div className="text-detalii-profil">
       {/*  <TextReutilizabil className="text-reutilizabil-subliniat" text={`id: ${userData.id}`} /> */}
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
