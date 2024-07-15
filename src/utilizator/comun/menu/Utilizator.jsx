import React from "react";
import DefaultLayout from "../../../layout/DefaultLayout";
import TitluPagina from "../../../elemente/constante/TitluPagina";
import PanouUtilizator from "./PanouUtilizator";

const Utilizator = ({ userData, children, activePage, profesorData, onProfessorSelect }) => {
  
  if (!activePage) {
    activePage = "Homepage";
  }
  
  return (
    <DefaultLayout onProfessorSelect={onProfessorSelect} profesorData={profesorData} userData={userData} titlu={TitluPagina[activePage]}>      
        <PanouUtilizator userData={userData} profesorData={profesorData}>
          {children}
        </PanouUtilizator>   
    </DefaultLayout>
  );
};

export default Utilizator;