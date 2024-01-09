import React from "react";
import LogoComponent from "../imagini/logo/LogoComponent";
import "./ElevulMeu.css"
import InfoBox from "../box/InfoBox";

const ElevulMeu = ({ eleviInfo }) => {
  return (
    <div className="elevul-meu-container">
      {eleviInfo.map((elev, index) => (
        <InfoBox className="info-box-4" key={index}>
            <LogoComponent/>
          <p>Elev {index + 1}</p>
          <p>{elev.nume_elev}</p>
        </InfoBox>
      ))}
    </div>
  );
};

export default ElevulMeu;
