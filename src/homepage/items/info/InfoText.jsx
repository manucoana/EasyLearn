import React from "react";
import "./InfoText.css";
import TextReutilizabil from "../../../text/TextReutilizabil";
import { SUBTITLU_INFO } from "../../../constante/TitluConstant";
import { DESCRIERE } from "../../../constante/InfoConstant";

const InfoText = () => {
  const subtitluInfo = SUBTITLU_INFO;
  const descriere = DESCRIERE;

  return (
    <div className="info-text-items">
      <TextReutilizabil className="text-reutilizabil-1" text={subtitluInfo}/>
      <TextReutilizabil className="text-reutilizabil-3" text={descriere} />
    </div>

  );
};

export default InfoText;
