import React, { useState, useEffect } from "react";
import "./Profil.css";
import axios from "axios";
import Sfera from "../layout/decor/Sfera";
import TextReutilizabil from "../text/TextReutilizabil";
import { TITLU_PROFIL } from "../constante/TitluConstant";
import DetaliiProfil from "./DetaliiProfil";

const Profil = ({ email }) => {
  const titluProfil = TITLU_PROFIL;

  const [userData, setUserData] = useState({});
  const [errorMessages, setErrorMessages] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/profil/${email}`)
      .then((response) => {
        const user = response.data;
        setUserData(user);
        setErrorMessages({});
      })
      .catch((error) => {
        console.log(error);
        setErrorMessages({ message: "Error" });
      });
  }, [email]);

  const renderError = (message) => message && <div className="error">{message}</div>;

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    axios
      .post(`http://localhost:3001/api/uploads`, formData)
      .then((response) => {
        console.log('Image uploaded successfully');

        const updatedUser = { ...userData, imageUrl: response.data.imageUrl };
        setUserData(updatedUser);
        setErrorMessages({});
      })
      .catch((error) => {
        console.error('Error uploading image: ', error);
        setErrorMessages({ message: 'Error uploading image' });
      });
  };

  return (
    <div className="profil-items">
      {renderError(errorMessages.message)}
      <div className="detalii">
        <TextReutilizabil className="text-reutilizabil-3" text={titluProfil} />
        <DetaliiProfil userData={userData} handleFileUpload={handleFileUpload} />
      </div>
      <div className="sfera-profil">
      <Sfera />
      </div>
    </div>
  );
};

export default Profil;