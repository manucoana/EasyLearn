import React from "react";
import "./Profil.css";
import DetaliiProfil from "./detalii/DetaliiProfil";
import InputImagineProfil from "../../../elemente/input/InputImagineProfil";
import TextReutilizabil from "../../../elemente/text/TextReutilizabil";
import handleImagineProfilUpload from "./functii/handleImagineProfilUpload";
import SferaUtilizator from "../../../layout/sfera/SferaUtilizator";

const Profil = ({ userData, activePage }) => {

  const handleImagineProfilUploadWrapper = async (event) => {
    const file = event.target.files[0];
    await handleImagineProfilUpload(file, userData, activePage);
  };

  return (
    <div className="profil-items">
      <div className="detalii">
        <TextReutilizabil className="text-subtitlu-albastru" text={activePage} />
        <DetaliiProfil userData={userData} />
        <TextReutilizabil className="text-mic" text="Modifica imaginea de profil:" />
        <InputImagineProfil className="incarca-imagine" imageUrl={userData.imageUrl} handleFileUpload={handleImagineProfilUploadWrapper} />
      </div>
       <SferaUtilizator userData={userData}/>
      </div>
  );
};

export default Profil;
