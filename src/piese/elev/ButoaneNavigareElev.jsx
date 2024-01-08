import React from "react";
import ButonReutilizabil from "../../butoane/ButonReutilizabil";
import "./ButoanePaginaStudiu.css";
import {
  SPRE_PAGINA_STUDIU,
  LISTA_ANUNTURI,
  PROFIL
} from  "../../constante/ButonConstant"

const ButoaneNavigareElev = ({ handleButtonClick }) => {

  const paginaStudiu = SPRE_PAGINA_STUDIU;
  const listaAnunturi = LISTA_ANUNTURI;
  const profil = PROFIL;

  return (
    <div className="butoane-student">
      <ButonReutilizabil className="buton-reutilizabil-1" onClick={() => handleButtonClick("PaginaStudiu")} text={paginaStudiu} />
      <ButonReutilizabil className="buton-reutilizabil-2" onClick={() => handleButtonClick("ListaAnunturi")} text={listaAnunturi} />
      <ButonReutilizabil className="buton-reutilizabil-3" onClick={() => handleButtonClick("Profil")} text={profil} />
    </div>
  );
};

export default ButoaneNavigareElev;
