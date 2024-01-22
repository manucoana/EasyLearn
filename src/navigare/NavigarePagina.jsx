import React from "react";
import Profil from "../profil/Profil";
import PaginaStudiu from "../studiu/principal/PaginaStudiu";
import ListaAnunturi from "../anunturi/ListaAnunturi";
import EleviiMei from "../eleviimei/EleviiMei";
import Lectii from "../studiu/lectii/Lectii";
import Teme from "../studiu/teme/Teme";
import Teste from "../studiu/teste/Teste";

const Pagini = {
  Profil,
  PaginaStudiu,
  ListaAnunturi,
  EleviiMei,
  Lectii,
  Teme,
  Teste,
};

const NavigarePagina = ({ activePage, email, userType, numeElev }) => {

  const PaginaCurenta = Pagini[activePage];

  return PaginaCurenta ? <PaginaCurenta activePage={activePage} email={email} userType={userType} numeElev={numeElev} /> : null;
};

export default NavigarePagina;
