import React from "react";
import Utilizator from "../../comun/menu/Utilizator";

const Elev = ({ userData }) => {

  return (
    <div>
      <Utilizator userData={userData} tipUtilizator={userData.tip_utilizator}/>
    </div>
  );
};

export default Elev;
