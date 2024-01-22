import React from "react";
import ButonReutilizabil from "../butoane/ButonReutilizabil";
import {
  SPRE_PAGINA_STUDIU,
  LISTA_ANUNTURI,
  PROFIL,
  ELEVII_MEI,
} from  "../constante/ButonConstant"

const ButoaneNavigare = ({ onClick, userType }) => {

  const paginaStudiu = SPRE_PAGINA_STUDIU;
  const listaAnunturi = LISTA_ANUNTURI;
  const profil = PROFIL;
  const eleviiMei = ELEVII_MEI;

  return (
    <div className="butoane">
      {userType === "Elev" && (
        <>
          <ButonReutilizabil className="buton-reutilizabil-1" onClick={() => onClick("PaginaStudiu")} text={paginaStudiu} />
          <ButonReutilizabil className="buton-reutilizabil-2" onClick={() => onClick("ListaAnunturi")} text={listaAnunturi} />
          <ButonReutilizabil className="buton-reutilizabil-3" onClick={() => onClick("Profil")} text={profil} />
        </>
      )}

      {userType === "Profesor" && (
        <>
          <ButonReutilizabil className="buton-reutilizabil-1" onClick={() => onClick("EleviiMei")} text={eleviiMei} />
          <ButonReutilizabil className="buton-reutilizabil-2" onClick={() => onClick("ListaAnunturi")} text={listaAnunturi} userType={userType}/>
          <ButonReutilizabil className="buton-reutilizabil-3" onClick={() => onClick("Profil")} text={profil} />
        </>
      )}
    </div>
  );
};

export default ButoaneNavigare;
