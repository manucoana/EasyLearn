import React from "react";
import "./IntrebariFrecvente.css"
import TextReutilizabil from "../../../elemente/text/TextReutilizabil";
import { SUBTITLU_INTREBARI } from "../../../elemente/constante/TitluConstant";
import Clasament from "../../../utilizator/comun/clasament/Clasament";

const IntrebariFrecvente = () => {
  
  const subtitluIntrebari = SUBTITLU_INTREBARI;

  return (
    <div className="intrebari-frecvente">
<Clasament></Clasament>
    </div>
  );
};

export default IntrebariFrecvente;