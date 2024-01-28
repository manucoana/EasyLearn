import React from "react";
import Profil from "../comun/profil/Profil";
import PaginaStudiu from "../elev/studiu/principal/PaginaStudiu";
import ListaAnunturi from "../comun/anunturi/lista/ListaAnunturi";
import EleviiMei from "../profesor/eleviimei/inscris/EleviiMei";
import Lectii from "../elev/studiu/lectii/Lectii";
import Teme from "../elev/studiu/teme/Teme";
import Teste from "../elev/studiu/teste/Teste";

const Pagini = {
  Profil,
  PaginaStudiu,
  ListaAnunturi,
  EleviiMei,
  Lectii,
  Teme,
  Teste,
};

const NavigarePagina = ({ userData, activePage, email, tipUtilizator, numeElev }) => {

  const PaginaCurenta = Pagini[activePage];

  return PaginaCurenta ? <PaginaCurenta userData={userData} activePage={activePage} email={email} tipUtilizator={tipUtilizator} numeElev={numeElev} /> : null;
};

export default NavigarePagina;
