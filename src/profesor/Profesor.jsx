import React, { useState, useEffect } from "react";
import "./Profesor.css";
import DefaultLayout from "../layout/DefaultLayout";
import Titlu from "../text/Titlu";
import Sfera from "../layout/decor/Sfera";
import NavigarePagina from "../navigare/NavigarePagina";
import ButoaneNavigare from "../navigare/ButoaneNavigare";
import TitluPagina from "../navigare/TitluPagina";

const Profesor = ({ email, userType }) => {

  const [activePage, setActivePage] = useState("");

  const onClick = (page) => {
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
    <DefaultLayout titlu={TitluPagina[activePage]}>
      {activePage ? (
        <NavigarePagina activePage={activePage} email={email} userType={userType} />
      ) : (
        <div>
          <div className='profesor-items'>
            <div className="panou-profesor">
              <Titlu />
              <ButoaneNavigare onClick={onClick} userType={userType} />
            </div>
            <Sfera />
          </div>
        </div>
      )}
    </DefaultLayout>
  );
};

export default Profesor;
