import React from "react";
import "./IntrebariFrecvente.css"
import TextReutilizabil from "../../../text/TextReutilizabil";
import { SUBTITLU_INTREBARI } from "../../../constante/TitluConstant";

const IntrebariFrecvente = () => {
  
  const subtitluIntrebari = SUBTITLU_INTREBARI;

  return (
    <div className="intrebari-frecvente">
        <TextReutilizabil className="text-subtitlu-albastru" text={subtitluIntrebari}/>
    </div>
  );
};

export default IntrebariFrecvente;