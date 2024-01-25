import React from "react";
import "./InfoText.css";
import TextReutilizabil from "../../../elemente/text/TextReutilizabil";
import { SUBTITLU_INFO } from "../../../elemente/constante/TitluConstant";
import { DESCRIERE } from "../../../elemente/constante/InfoConstant";

const InfoText = () => {
  const subtitluInfo = SUBTITLU_INFO;
  const descriere = DESCRIERE;

  return (
    <div className="info-text-items">
      <TextReutilizabil className="text-titlu-site" text={subtitluInfo}/>
      <TextReutilizabil className="text-normal" text={descriere} />
    </div>

  );
};

export default InfoText;
