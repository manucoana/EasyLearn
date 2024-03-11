import React, { useState, useEffect } from "react";
import "./DefaultLayout.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import NavigarePagina from "../navigare/NavigarePagina";
import useLogicaNavigare from "./LogicaNavigare";
import TitluPagina from "../elemente/constante/TitluPagina";

const DefaultLayout = ({ userData, children, hideHeaderFooter, profesorData }) => {
  const { activePage, onClick, goBack } = useLogicaNavigare(userData);
  const [titlu, setTitlu] = useState("");

  useEffect(() => {
    if (activePage && TitluPagina[activePage]) {
      setTitlu(TitluPagina[activePage]);
    } else {
      setTitlu("");
      document.title = "EasyLearn";
    }
  }, [activePage]);

  return (
    <div className="default-layout">
      {!hideHeaderFooter && <Header goBack={goBack} onClick={onClick} userData={userData} titlu={titlu} />}
      {activePage ? (
        <NavigarePagina userData={userData} profesorData={profesorData} activePage={activePage} />
      ) : (       
          <div className="homepage-container">{children}</div>
      )}
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default DefaultLayout;