import React from "react";
import "./ButoaneNavigare.css";
import ButonReutilizabil from "../elemente/butoane/ButonReutilizabil";
import {
  SPRE_PAGINA_STUDIU,
  LISTA_ANUNTURI,
  PROFIL,
  ELEVII_MEI,
  MESAJE,
} from "../elemente/constante/ButonConstant";

const ButoaneNavigare = ({ userData, onClick, profesorData }) => {

  return (
    <div className="butoane">
      {userData?.tip_utilizator === "Elev" && (
        <ButonReutilizabil userData={userData} profesorData={profesorData} className="buton-nav-principal" onClick={() => onClick("PaginaStudiu")} text={SPRE_PAGINA_STUDIU} />
      )}
      {userData?.tip_utilizator === "Profesor" && (
        <ButonReutilizabil userData={userData} className="buton-nav-principal" onClick={() => onClick("EleviiMei")} text={ELEVII_MEI} />
      )}
      

      <ButonReutilizabil userData={userData} className="buton-nav-principal" onClick={() => onClick("ListaAnunturi")} text={LISTA_ANUNTURI} />
      <ButonReutilizabil userData={userData} className="buton-nav-principal" onClick={() => onClick("Profil")} text={PROFIL} />
      <ButonReutilizabil userData={userData} profesorData={profesorData} className="buton-nav-principal" onClick={() => onClick("PaginaMesaje")} text={MESAJE} />
      <ButonReutilizabil className="buton-nav-principal" onClick={() => onClick("Clasament")} text="Clasament" />
    </div>
  );
};

export default ButoaneNavigare;
