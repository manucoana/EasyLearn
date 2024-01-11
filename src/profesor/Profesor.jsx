import React, { useState, useEffect } from "react";
import "./Profesor.css";
import ButonReutilizabil from '../butoane/ButonReutilizabil';
import DefaultLayout from "../layout/DefaultLayout";
import Titlu from "../text/Titlu";
import Sfera from "../layout/decor/Sfera";
import {
  ELEVII_MEI,
  LISTA_ANUNTURI,
  PROFIL
} from "../constante/ButonConstant"
import NavigarePagina from "../piese/NavigarePagina";
import ButoaneNavigare from "../piese/ButoaneNavigare";

const Profesor = ({ email, userType }) => {

  const eleviiMei = ELEVII_MEI;
  const listaAnunturi = LISTA_ANUNTURI;
  const profil = PROFIL;

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
        <NavigarePagina activePage={activePage} email={email} userType={userType} />
      ) : (
        <div>
          <div className='profesor-items'>
            <div className="panou-profesor">
              <Titlu />
              <ButoaneNavigare handleButtonClick={handleButtonClick} userType={userType} />
            </div>
            <Sfera />
          </div>
        
        </div>
      )}
    </DefaultLayout>
  );
};

export default Profesor;
