import React, { useState, useEffect } from "react";
import "./Profesor.css";
import ButonReutilizabil from '../butoane/ButonReutilizabil';
import DefaultLayout from "../layout/DefaultLayout";
import NavigareElev from "../piese/elev/NavigarePagina";
import Titlu from "../text/Titlu";
import Sfera from "../layout/decor/Sfera";

const Profesor = ({ email }) => {
  const [activePage, setActivePage] = useState("");

  const handleButtonClick = (page) => {
    setActivePage(page);
    window.history.pushState({ page: page }, page, `${page.toLowerCase()}`);
  };
  useEffect(() => {
    const gestioneazaNavigare = (event) => {
      setActivePage(event.state?.page || "");
    };

    window.addEventListener("popstate", gestioneazaNavigare);

    return () => {
      window.removeEventListener("popstate", gestioneazaNavigare);
    };
  }, []);

  return (
    <DefaultLayout>
      {activePage ? (
        <NavigareElev activePage={activePage} email={email} />
      ) : (
        <div className='profesor-items'>
          <div className="panou-profesor">
            <Titlu />
            <ButonReutilizabil className="buton-reutilizabil-1" onClick={() => handleButtonClick("EleviiMei")} text="ELEVII MEI" />
            <ButonReutilizabil className="buton-reutilizabil-2" onClick={() => handleButtonClick("ListaAnunturi")} text="LISTA ANUNTURI" />
            <ButonReutilizabil className="buton-reutilizabil-3" onClick={() => handleButtonClick("Profil")} text="PROFIL" />
          </div>
          <Sfera />
        </div>
      )}
    </DefaultLayout>
  );
};

export default Profesor;
