import React from "react";
import ListaAnunturi from "../../anunturi/ListaAnunturi";
import PaginaStudiu from "../../studiu/principal/PaginaStudiu";
import { Profil } from "../../profil/Profil";

const NavigareElev = ({ activePage, email }) => {
  switch (activePage) {
    case "Profil":
      return <Profil email={email} />;
    case "PaginaStudiu":
      return <PaginaStudiu email={email} />;
    case "ListaAnunturi":
      return <ListaAnunturi />;
    default:
      return null;
  }
};

export default NavigareElev;