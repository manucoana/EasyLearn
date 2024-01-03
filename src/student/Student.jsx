import React, { useState, useEffect } from "react";
import { Profil } from "../profil/Profil";
import "./Student.css";
import Titlu from "../text/Titlu";
import PaginaStudiu from "./studiu/PaginaStudiu";
import ListaAnunturi from "./anunturi/ListaAnunturi";
import DefaultLayout from "../layout/DefaultLayout";
import ButonReutilizabil from "../butoane/ButonReutilizabil";
import Sfera from "../layout/decor/Sfera";

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
                <ButonReutilizabil onClick={() => handleButtonClick("PaginaStudiu")} text="SPRE PAGINA DE STUDIU" color="#4d72dd" />
                <ButonReutilizabil onClick={() => handleButtonClick("ListaAnunturi")} text="LISTA ANUNTURI" color="#141b76" />
                <ButonReutilizabil onClick={() => handleButtonClick("Profil")} text="PROFIL" color="#0d114d" />
              </div>
            </div>
            <Sfera />
          </div>
        );
    }
  };

  return <DefaultLayout>{renderContent()}</DefaultLayout>;
};

export default Student;
