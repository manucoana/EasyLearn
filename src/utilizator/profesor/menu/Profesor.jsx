import React from "react";
import "./Profesor.css";
import Utilizator from "../../comun/menu/Utilizator";

const Profesor = ({ userData }) => {
  return <Utilizator userData={userData} tipUtilizator={userData.tip_utilizator} />;
};

export default Profesor;
