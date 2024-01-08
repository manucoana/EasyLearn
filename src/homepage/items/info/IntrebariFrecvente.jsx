import React from "react";
import "./IntrebariFrecvente.css"
import TextReutilizabil from "../../../text/TextReutilizabil";
import InfoBox from "../../../box/InfoBox";
import { SUBTITLU_INTREBARI } from "../../../constante/TitluConstant";

const IntrebariFrecvente = () => {
  
  const subtitluIntrebari = SUBTITLU_INTREBARI;

  return (
    <div className="intrebari-frecvente">
        <TextReutilizabil className="text-reutilizabil-2" text={subtitluIntrebari}/>
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