import React, { useState, useEffect } from "react";
import ButonReutilizabil from '../butoane/ButonReutilizabil';
import DefaultLayout from "../layout/DefaultLayout";
import NavigareElev from "../piese/elev/NavigareElev";

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
          <h1>SUCCES</h1>
          <ButonReutilizabil className="buton-reutilizabil-3" onClick={() => handleButtonClick("Profil")} text="PROFIL" />
          <ButonReutilizabil className="buton-reutilizabil-2" onClick={() => handleButtonClick("ListaAnunturi")} text="LISTA ANUNTURI" />
        </div>
      )}
    </DefaultLayout>
  );
};

export default Profesor;
