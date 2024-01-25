import React, { useState, useEffect } from "react";
import "./Profesor.css";
import DefaultLayout from "../layout/DefaultLayout";
import Titlu from "../elemente/text/Titlu";
import Sfera from "../layout/decor/Sfera";
import NavigarePagina from "../navigare/NavigarePagina";
import ButoaneNavigare from "../navigare/ButoaneNavigare";
import TitluPagina from "../navigare/TitluPagina";
import useFetchUserData from "../profil/useFetchUserData";
import ImagineProfil from "../profil/ImagineProfil";
import TextReutilizabil from "../elemente/text/TextReutilizabil";

const Profesor = ({ email, tipUtilizator }) => {

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
        <NavigarePagina activePage={activePage} email={email} tipUtilizator={tipUtilizator} />
      ) : (
        <div>
          <div className='profesor-items'>
            <div className="panou-profesor">
              <Titlu />
              <ButoaneNavigare onClick={onClick} tipUtilizator={tipUtilizator} />
            </div>
            <Sfera>
              <ImagineProfil email={email} />
              <TextReutilizabil className="text-mic" text={userData.nume} />
              <TextReutilizabil className="text-mic" text={userData.tip_utilizator} />
            </Sfera>
          </div>
        </div>
      )}
    </DefaultLayout>
  );
};

export default Profesor;
