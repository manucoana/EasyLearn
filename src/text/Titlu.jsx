import React from "react";
import "./Titlu.css";
import TextReutilizabil from "./TextReutilizabil";
import { TITLU_PLATFORMA, SUBTITLU_TEXT } from "../constante/TitluConstant";

const Titlu = () => {
  return (
    <div className="titlu-items">
      <TextReutilizabil className="text-titlu-site" text={TITLU_PLATFORMA} />
      <TextReutilizabil className="text-subtitlu" text={SUBTITLU_TEXT} />
    </div>
  );
};

export default Titlu;