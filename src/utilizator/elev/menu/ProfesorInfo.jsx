import React from "react";
import TextReutilizabil from "../../../elemente/text/TextReutilizabil";
import ImagineProfil from "../../comun/profil/imagine/ImagineProfil";
import Sfera from "../../../layout/sfera/Sfera";

const ProfesorInfo = ({ profesorData }) => {
  return (
    <div className="profesorul-meu">
      <Sfera>
        <ImagineProfil userData={profesorData} />
        <TextReutilizabil className="text-mic" text={`Profesorul meu este`} />
        <TextReutilizabil className="text-normal" text={profesorData?.nume} />
      </Sfera>
    </div >
  );
};

export default ProfesorInfo;
