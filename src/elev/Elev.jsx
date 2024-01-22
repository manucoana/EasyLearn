import React, { useState, useEffect } from "react";
import "./Elev.css";
import Titlu from "../text/Titlu";
import DefaultLayout from "../layout/DefaultLayout";
import Sfera from "../layout/decor/Sfera";
import ButoaneNavigare from "../navigare/ButoaneNavigare";
import NavigarePagina from "../navigare/NavigarePagina";
import TitluPagina from "../navigare/TitluPagina";

const Elev = ({ email, userType }) => {

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
        <NavigarePagina activePage={activePage} email={email} />
      ) : (
        <div className="elev-items">
          <div className="panou-elev">
            <Titlu />
            <ButoaneNavigare onClick={onClick} userType={userType} />
          </div>
          <Sfera />
        </div>
      )}
    </DefaultLayout>
  );
};

export default Elev;
