import React from "react";
import "./IntrebariFrecvente.css"
import TextReutilizabil from "../../../text/TextReutilizabil";
import InfoBox from "../../../box/InfoBox";

const IntrebariFrecvente = () => {
  return (
    <div className="intrebari-frecvente">
        <TextReutilizabil className="text-intrebari" text="Intrebari Frecvente" fontSize="1.87em" color="#f2f3f4"/>
        <InfoBox className="info-box-2"/>
        <InfoBox className="info-box-2"/>
        <br></br>
        <InfoBox className="info-box-2"/>
        <InfoBox className="info-box-2"/>
        <br></br>
        <InfoBox className="info-box-2"/>
        <InfoBox className="info-box-2"/>
    </div>
  );
};

export default IntrebariFrecvente;