import React from "react";
import "./Elev.css";
import Utilizator from "../../comun/menu/Utilizator";

const Elev = ({ userData }) => {
  return <Utilizator userData={userData} tipUtilizator={userData.tip_utilizator} />;
};

export default Elev;
