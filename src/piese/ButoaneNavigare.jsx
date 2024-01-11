import React from "react";
import ButonReutilizabil from "../butoane/ButonReutilizabil";
import {
  SPRE_PAGINA_STUDIU,
  LISTA_ANUNTURI,
  PROFIL,
  ELEVII_MEI,
} from  "../constante/ButonConstant"
import ListaAnunturi from "../anunturi/ListaAnunturi";

const ButoaneNavigare = ({ handleButtonClick, userType }) => {

  const paginaStudiu = SPRE_PAGINA_STUDIU;
  const listaAnunturi = LISTA_ANUNTURI;
  const profil = PROFIL;
  const eleviiMei = ELEVII_MEI;

  return (
    <div className="butoane">
      {userType === "Elev" && (
        <>
          <ButonReutilizabil className="buton-reutilizabil-1" onClick={() => handleButtonClick("PaginaStudiu")} text={paginaStudiu} />
          <ButonReutilizabil className="buton-reutilizabil-2" onClick={() => handleButtonClick("ListaAnunturi")} text={listaAnunturi} />
          <ButonReutilizabil className="buton-reutilizabil-3" onClick={() => handleButtonClick("Profil")} text={profil} />
        </>
      )}

      {userType === "Profesor" && (
        <>
          <ButonReutilizabil className="buton-reutilizabil-1" onClick={() => handleButtonClick("EleviiMei")} text={eleviiMei} />
          <ButonReutilizabil className="buton-reutilizabil-2" onClick={() => handleButtonClick("ListaAnunturi")} text={listaAnunturi} userType={userType}/>
          <ButonReutilizabil className="buton-reutilizabil-3" onClick={() => handleButtonClick("Profil")} text={profil} />
        </>
      )}
    </div>
  );
};

export default ButoaneNavigare;
