import React, { useState } from "react";
import TextReutilizabil from "../text/TextReutilizabil";
import "./IncarcareMaterial.css";
import ButoanePaginaStudiu from "../studiu/principal/ButoanePaginaStudiu";
import NavigarePagina from "../piese/NavigarePagina";

const IncarcareMaterial = ({ email, numeElev }) => {

  const [activePage, setActivePage] = useState("");

  const handleButtonClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="incarcare-material-items">
      <TextReutilizabil className="text-reutilizabil-4" text={"Incarca materiale pentru " + numeElev} />
      <div className="butoane-incarcare-material">
        <ButoanePaginaStudiu className="butoane-incarcare-material" handleButtonClick={handleButtonClick} />
        <NavigarePagina activePage={activePage} email={email} />
      </div>
    </div>
  );
};

export default IncarcareMaterial;
