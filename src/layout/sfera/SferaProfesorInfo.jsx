import React from "react";
import TextReutilizabil from "../../elemente/text/TextReutilizabil";
import ImagineProfil from "../../utilizator/comun/profil/imagine/ImagineProfil";
import Sfera from "./Sfera";

const SferaProfesorInfo = ({ profesorData, onClick }) => {
  return (
    <div className="profesorul-meu" onClick={onClick}>
      <Sfera>
        <ImagineProfil userData={profesorData} />
        <TextReutilizabil className="text-mic" text={`Profesorul meu este`} />
        <TextReutilizabil className="text-normal" text={profesorData?.nume} />
      </Sfera>
    </div >
  );
};

export default SferaProfesorInfo;
