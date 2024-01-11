import React from "react";
import Profil from "../profil/Profil";
import PaginaStudiu from "../studiu/principal/PaginaStudiu";
import ListaAnunturi from "../anunturi/ListaAnunturi";
import EleviiMei from "../eleviimei/EleviiMei";

const NavigarePagina = ({ activePage, email, userType }) => {

  const Pagini = {
    Profil: ({ email, userType }) => <Profil email={email} userType={userType} />,
    PaginaStudiu: ({ email, userType }) => <PaginaStudiu email={email} userType={userType} />,
    ListaAnunturi: ({ email, userType }) => <ListaAnunturi email={email} userType={userType} />,
    EleviiMei: ({ email, userType }) => <EleviiMei email={email} userType={userType} />,
  };

  const PaginaCurenta = Pagini[activePage];
  return PaginaCurenta ? <PaginaCurenta email={email} userType={userType} /> : null;
};

export default NavigarePagina;