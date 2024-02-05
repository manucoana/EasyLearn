import React, { useState, useEffect } from "react";
import './Utilizator.css';
import Titlu from "../../../elemente/text/Titlu";
import DefaultLayout from "../../../layout/DefaultLayout";
import NavigarePagina from "../../../navigare/NavigarePagina";
import TitluPagina from "../../../navigare/TitluPagina";
import SferaUtilizator from "../../../layout/sfera/SferaUtilizator";
import NavPrincipal from "../../../layout/nav/NavPrincipal";

const Utilizator = ({ userData, profesorData, children }) => {
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
    <DefaultLayout userData={userData} titlu={TitluPagina[activePage]}>
      {activePage ? (
        <NavigarePagina userData={userData} profesorData={profesorData} activePage={activePage} />
      ) : (
        <div>
          <NavPrincipal onClick={onClick} userData={userData}/>
          
          <div className="utilizator-items">
            <div className={`panou-${userData.tip_utilizator}`}>
              <Titlu />
              {children}
            </div>
            <SferaUtilizator userData={userData}/>
          </div>
        </div>
      )}
    </DefaultLayout>
  );
};

export default Utilizator;