import React from "react";
import "./IntrebariFrecvente.css"
import TextReutilizabil from "../../../text/TextReutilizabil";

const IntrebariFrecvente = () => {
  return (
    <div className="intrebari-frecvente">
        <TextReutilizabil className="text-intrebari" text="Intrebari Frecvente" fontSize="1.87em"/>
        <div className="intrebare"></div>
        <div className="raspuns"></div>
        <br></br>
        <div className="intrebare"></div>
        <div className="raspuns"></div>
        <br></br>
        <div className="intrebare"></div>
        <div className="raspuns"></div>
        <br></br>
        <div className="intrebare"></div>
        <div className="raspuns"></div>
    </div>
  );
};

export default IntrebariFrecvente;