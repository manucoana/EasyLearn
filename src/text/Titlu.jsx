import React from "react";
import "./Titlu.css";
import TextReutilizabil from "./TextReutilizabil";
import { TITLU_PLATFORMA, SUBTITLU_TEXT } from "../constante/TitluConstant";

const Titlu = () => {
  return (
    <div className="container-titlu">
      <TextReutilizabil className="text-reutilizabil-1" text={TITLU_PLATFORMA} />
      <TextReutilizabil className="text-reutilizabil-2" text={SUBTITLU_TEXT} />
    </div>
  );
};

export default Titlu;