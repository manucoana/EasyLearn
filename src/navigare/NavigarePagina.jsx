import React from "react";
import Profil from "../utilizator/comun/profil/Profil";
import PaginaStudiu from "../utilizator/elev/studiu/principal/PaginaStudiu";
import ListaAnunturi from "../utilizator/comun/anunturi/lista/ListaAnunturi";
import EleviiMei from "../utilizator/profesor/eleviimei/inscris/EleviiMei";
import Lectii from "../utilizator/elev/studiu/lectii/Lectii";
import Teme from "../utilizator/elev/studiu/teme/Teme";
import Teste from "../utilizator/elev/studiu/teste/Teste";
import PanouUtilizator from "../utilizator/comun/menu/PanouUtilizator";
import IncarcareMaterial from "../utilizator/profesor/eleviimei/incarcare/IncarcareMaterial";

const Pagini = {
  PanouUtilizator,
  Profil,
  PaginaStudiu,
  ListaAnunturi,
  EleviiMei,
  Lectii,
  Teme,
  Teste,
  IncarcareMaterial
};

const NavigarePagina = ({ userData, activePage , profesorData }) => {
  const PaginaCurenta = Pagini[activePage];

  return PaginaCurenta ? <PaginaCurenta userData={userData} profesorData={profesorData} activePage={activePage} /> : null;
};

export default NavigarePagina;
