import React from "react";
import "./Profil.css";
import Sfera from "../layout/decor/Sfera";
import DetaliiProfil from "./DetaliiProfil";
import ImagineProfil from "./ImagineProfil";
import useFetchUserData from "./useFetchUserData";
import InputImagineProfil from "./InputImagineProfil";
import TextReutilizabil from "../elemente/text/TextReutilizabil";

const Profil = ({ email, activePage }) => {

  const { userData } = useFetchUserData(email);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const titlu = file.name;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('nume_elev', userData.nume);
    formData.append('active_page', activePage);

    try {
      const response = await fetch("http://localhost:3001/api/material-didactic/uploads", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        console.error(`Eroare la încărcarea materialului: ${response.statusText}`);
        return;
      }

      const result = await response.json();
      const cale = result.imageUrl;

      console.log("Cale imagine:", cale);

      const data = {
        nume: userData.nume,
        cale: cale,
        titlu: titlu,
      };

      const insertResponse = await fetch("http://localhost:3001/api/profil/info-poza", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!insertResponse.ok) {
        console.error(`Eroare la inserarea datelor: ${insertResponse.statusText}`);
      } else {
        console.log("Material și datele au fost încărcate cu succes!");
      }
    } catch (error) {
      console.error(`Eroare la încărcarea materialului: ${error.message}`);
    }
  };

  return (
    <div className="profil-items">
      <div className="detalii">
        <DetaliiProfil email={email} />
        <TextReutilizabil className="text-mic" text="Modifica imaginea de profil:"/>
        <InputImagineProfil className="incarca-imagine" imageUrl={userData.imageUrl} handleFileUpload={handleFileUpload} />
      </div>
      <div className="sfera-profil">
        <Sfera>
          <ImagineProfil email={email} />       
          <TextReutilizabil className="text-normal" text={userData.nume}/>
          <TextReutilizabil className="text-mic" text={userData.tip_utilizator}/>      
        </Sfera>
      </div>
    </div>
  );
};

export default Profil;
