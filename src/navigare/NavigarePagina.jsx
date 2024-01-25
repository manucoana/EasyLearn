import React from "react";
import Profil from "../profil/Profil";
import Profesor from "../profesor/Profesor";
import PaginaStudiu from "../studiu/principal/PaginaStudiu";
import ListaAnunturi from "../anunturi/lista/ListaAnunturi";
import EleviiMei from "../eleviimei/inscris/EleviiMei";
import Lectii from "../studiu/lectii/Lectii";
import Teme from "../studiu/teme/Teme";
import Teste from "../studiu/teste/Teste";

const Pagini = {
  Profesor,
  Profil,
  PaginaStudiu,
  ListaAnunturi,
  EleviiMei,
  Lectii,
  Teme,
  Teste,
};

const NavigarePagina = ({ activePage, email, tipUtilizator, numeElev }) => {

  const PaginaCurenta = Pagini[activePage];

  return PaginaCurenta ? <PaginaCurenta activePage={activePage} email={email} tipUtilizator={tipUtilizator} numeElev={numeElev} /> : null;
};

export default NavigarePagina;
