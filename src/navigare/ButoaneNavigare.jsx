import React from "react";
import "./ButoaneNavigare.css"
import ButonReutilizabil from "../elemente/butoane/ButonReutilizabil";
import {
  SPRE_PAGINA_STUDIU,
  LISTA_ANUNTURI,
  PROFIL,
  ELEVII_MEI,
} from "../elemente/constante/ButonConstant"

const ButoaneNavigare = ({ userData, onClick }) => {

  const paginaStudiu = SPRE_PAGINA_STUDIU;
  const listaAnunturi = LISTA_ANUNTURI;
  const profil = PROFIL;
  const eleviiMei = ELEVII_MEI;

  return (
    <div className="butoane">
      <ButonReutilizabil userData={userData} className="buton-nav-principal" onClick={() => onClick("PanouUtilizator")} text="Home" />

      {userData?.tip_utilizator === "Elev" && (
        <>
          <ButonReutilizabil userData={userData} className="buton-nav-principal" onClick={() => onClick("PaginaStudiu")} text={paginaStudiu} />
        </>
      )}

      {userData?.tip_utilizator === "Profesor" && (
        <>
          <ButonReutilizabil userData={userData} className="buton-nav-principal" onClick={() => onClick("EleviiMei")} text={eleviiMei} />
        </>
      )}
      <ButonReutilizabil userData={userData} className="buton-nav-principal" onClick={() => onClick("ListaAnunturi")} text={listaAnunturi} />
      <ButonReutilizabil userData={userData} className="buton-nav-principal" onClick={() => onClick("Profil")} text={profil} />
    </div>
  );
};

export default ButoaneNavigare;
