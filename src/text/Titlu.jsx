import React from "react";
import "./Titlu.css";
import TextReutilizabil from "./TextReutilizabil";

const Titlu = () => {
  return (
    <div className="container-titlu">
      <TextReutilizabil className="titlu" text="EasyLearn" fontSize="3em" />
      <TextReutilizabil className="subtitlu" text="Platforma online de meditatii" color="#f2f3f4" fontSize="1.87em" />
    </div>
  );
};

export default Titlu;
