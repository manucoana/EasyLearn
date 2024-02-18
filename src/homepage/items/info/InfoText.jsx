import React from "react";
import "./InfoText.css";
import TextReutilizabil from "../../../elemente/text/TextReutilizabil";
import { SUBTITLU_INFO } from "../../../elemente/constante/TitluConstant";
import { DESCRIERE } from "../../../elemente/constante/InfoConstant";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImagini from "../../../imagini/slider/SliderImagini";

const InfoText = () => {
  const subtitluInfo = SUBTITLU_INFO;
  const descriere = DESCRIERE;

  return (
    <div className="info-text-items">
      <SliderImagini/>
      <TextReutilizabil className="text-subtitlu-albastru" text={subtitluInfo} />
      <TextReutilizabil className="text-normal" text={descriere} />
    </div>

  );
};

export default InfoText;
