import React from "react";
import './Utilizator.css';
import DefaultLayout from "../../../layout/DefaultLayout";
import TitluPagina from "../../../elemente/constante/TitluPagina";
import PanouUtilizator from "./PanouUtilizator";

const Utilizator = ({ userData, children, activePage, profesorData }) => {
  
  if (!activePage) {
    activePage = "Homepage";
  }

  console.log(activePage)
  
  return (
    <DefaultLayout profesorData={profesorData} userData={userData} titlu={TitluPagina[activePage]}>
      <>
        <PanouUtilizator userData={userData} profesorData={profesorData}>
          {children}
        </PanouUtilizator>
      </>
    </DefaultLayout>
  );
};

export default Utilizator;