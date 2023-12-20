import React from "react";

import "./ButoaneStudent.css"

import ButonPaginaStudiu from "./studiu/ButonPaginaStudiu";
import ButonListaAnunturi from "./lista/ButonListaAnunturi";
import ButonProfil from "./profil/ButonProfil";

const ButoaneStudent = ({ onClick }) => {
    const handleProfilButtonClick = () => {
        onClick();
    };
  
    return (
      <div className="butoane-student">
        <ButonPaginaStudiu />
        <ButonListaAnunturi />
        <ButonProfil onClick={handleProfilButtonClick} />
      </div>
    );
  };
  
  export default ButoaneStudent;
