import React, { useState, useEffect } from "react";
import './Utilizator.css';
import Titlu from "../../../elemente/text/Titlu";
import DefaultLayout from "../../../layout/DefaultLayout";
import Sfera from "../../../layout/decor/Sfera";
import ButoaneNavigare from "../../../navigare/ButoaneNavigare";
import NavigarePagina from "../../navigare/NavigarePagina";
import TitluPagina from "../../../navigare/TitluPagina";
import ImagineProfil from "../profil/ImagineProfil";
import TextReutilizabil from "../../../elemente/text/TextReutilizabil";


const Utilizator = ({ userData, tipUtilizator }) => {
  const [activePage, setActivePage] = useState("");

  const onClick = (page) => {
    setActivePage(page);
    window.history.pushState({ page: page }, page, `${page.toLowerCase()}`);
  };

  useEffect(() => {
    const handlePopState = (event) => {
      const previousPage = activePage;
      setActivePage(event.state?.page || "");
      console.log(`Navigating from ${previousPage} to ${event.state?.page}`);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [activePage]);

  return (
    <DefaultLayout email={userData.email} titlu={TitluPagina[activePage]}>
      {activePage ? (
        <NavigarePagina userData={userData} activePage={activePage} />
      ) : (
        <div className="utilizator-items">
          <div className={`panou-${tipUtilizator}`}>
            <Titlu />
            <ButoaneNavigare onClick={onClick} tipUtilizator={tipUtilizator} />
          </div>
          <Sfera>
            <ImagineProfil userData={userData} />
            <TextReutilizabil className="text-normal" text={userData.nume} />
            <TextReutilizabil className="text-mic" text={tipUtilizator} />
          </Sfera>
        </div>
      )}
    </DefaultLayout>
  );
};

export default Utilizator;