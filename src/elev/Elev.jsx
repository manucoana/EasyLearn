import React, { useState, useEffect } from "react";
import "./Elev.css";
import Titlu from "../elemente/text/Titlu";
import DefaultLayout from "../layout/DefaultLayout";
import Sfera from "../layout/decor/Sfera";
import ButoaneNavigare from "../navigare/ButoaneNavigare";
import NavigarePagina from "../navigare/NavigarePagina";
import TitluPagina from "../navigare/TitluPagina";
import ImagineProfil from "../profil/ImagineProfil";
import TextReutilizabil from "../elemente/text/TextReutilizabil";
import useFetchUserData from "../profil/useFetchUserData";

const Elev = ({ email, tipUtilizator }) => {

  const [activePage, setActivePage] = useState("");
  const { userData } = useFetchUserData(email);

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
          <div className="elev-items-1">
            <div className="panou-elev">
              <Titlu />
              <ButoaneNavigare onClick={onClick} tipUtilizator={tipUtilizator} />
            </div>
            <Sfera>
              <ImagineProfil email={email} />
              <TextReutilizabil className="text-normal" text={userData.nume} />
              <TextReutilizabil className="text-mic" text={userData.tip_utilizator} />
            </Sfera>
          </div>
        </div>
      )
      }
    </DefaultLayout >
  );
};

export default Elev;
