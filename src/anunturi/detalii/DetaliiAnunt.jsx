import React from "react";
import "./DetaliiAnunt.css";
import DetaliiProfil from "../../profil/DetaliiProfil";
import useFetchUserData from "../../profil/useFetchUserData";
import ImagineProfil from "../../profil/ImagineProfil";
import SolicitaColaborare from "./SolicitaColaborare";
import axios from "axios";
import Sfera from "../../layout/decor/Sfera";
import TextReutilizabil from "../../elemente/text/TextReutilizabil";

const DetaliiAnunt = ({ email, idUtilizator }) => {

  const { userData } = useFetchUserData(email);

  const trimiteSolicitare = async () => {
    try {
      const idElev = idUtilizator;
      console.log("Nume elev: " + idUtilizator)

      const idProfesor = userData.id;
      console.log("Nume profesor: " + userData.id)

      const response = await axios.post('http://localhost:3001/api/meditatii/solicita-colaborare', { idElev, idProfesor });

      console.log(response.data.message);
      alert('Solicitarea de colaborare a fost trimisa cu succes.');
    } catch (error) {
      console.error('Error sending request:', error);
      alert('A aparut o eroare. Va rugam să încercati din nou mai tarziu.');
    }
  };

  return (
    <div className="detalii-utilizator-items">
      <div className="detalii-container">
        <DetaliiProfil userData={userData} email={email} />
        <SolicitaColaborare onClick={trimiteSolicitare} />
      </div>
      <Sfera>
        <ImagineProfil email={email} />
        <TextReutilizabil className="text-normal" text={userData.nume} />
        <TextReutilizabil className="text-mic" text={userData.tip_utilizator} />
      </Sfera>
    </div>
  );
};

export default DetaliiAnunt;