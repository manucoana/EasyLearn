import React from "react";
import "./InfoText.css";
import TextReutilizabil from "../../../text/TextReutilizabil";

const InfoText = () => {
  const textDescriere = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"
  return (
    <div className="info-text-items">
      <TextReutilizabil className="descriere-platforma-titlu" text="Info" fontSize="3em" textAlign="center" />
      <TextReutilizabil className="descriere-platforma-paragraf"
        text={textDescriere} fontSize="1.87em" />
    </div>

  );
};

export default InfoText;
