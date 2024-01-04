import React, { useState, useEffect } from "react";
import { Profil } from "../profil/Profil";
import "./Student.css";
import Titlu from "../text/Titlu";
import PaginaStudiu from "./studiu/PaginaStudiu";
import ListaAnunturi from "./anunturi/ListaAnunturi";
import DefaultLayout from "../layout/DefaultLayout";
import ButonReutilizabil from "../butoane/ButonReutilizabil";
import Sfera from "../layout/decor/Sfera";
import LogoComponent from "../imagini/logo/LogoComponent";

const Student = ({ email }) => {
  const [activePage, setActivePage] = useState("");

  const handleButtonClick = (page) => {
    setActivePage(page);
    window.history.pushState({ page: page }, page, `/student/${page.toLowerCase()}`);
  };

  const handleClose = () => {
    setActivePage("");
    window.history.pushState({}, "", "/student");
  };

  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.page) {
        setActivePage(event.state.page);
      } else {
        setActivePage("");
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const renderContent = () => {
    switch (activePage) {
      case "Profil":
        return <Profil email={email} handleProfilClose={handleClose} />;
      case "PaginaStudiu":
        return <PaginaStudiu email={email} handlePaginaStudiuClose={handleClose} />;
      case "ListaAnunturi":
        return <ListaAnunturi handleListaAnunturiClose={handleClose} />;
      default:
        return (
          <div className="student-items">
            <div className="panou-student">
              <Titlu />
              <div className="butoane-student">
                <ButonReutilizabil className="buton-reutilizabil-1" onClick={() => handleButtonClick("PaginaStudiu")} text="SPRE PAGINA DE STUDIU"  />
                <ButonReutilizabil className="buton-reutilizabil-2" onClick={() => handleButtonClick("ListaAnunturi")} text="LISTA ANUNTURI"  />
                <ButonReutilizabil className="buton-reutilizabil-3" onClick={() => handleButtonClick("Profil")} text="PROFIL" />
              </div>
            </div>
            <Sfera>
              <LogoComponent/>
            </Sfera>
          </div>
        );
    }
  };

  return <DefaultLayout>{renderContent()}</DefaultLayout>;
};

export default Student;
