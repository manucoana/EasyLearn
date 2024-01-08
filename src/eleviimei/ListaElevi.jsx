import React from "react";
import LogoComponent from "../imagini/logo/LogoComponent";

const ListaElevi = ({ eleviInfo }) => {
  return (
    <div className="lista-elevi">
      {eleviInfo.map((elev, index) => (
        <div key={index}>
            <LogoComponent/>
          <p>Elev {index + 1}</p>
          <p>{elev.nume_elev}</p>
        </div>
      ))}
    </div>
  );
};

export default ListaElevi;
