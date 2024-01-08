import React, { useState, useEffect } from "react";
import "./Profil.css";
import axios from "axios";
import Sfera from "../layout/decor/Sfera";
import TextReutilizabil from "../text/TextReutilizabil";
import { TITLU_PROFIL } from "../constante/TitluConstant";


export const Profil = ({ email }) => {

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

  const renderForm = () => (
    <div className="profil-container">
      <TextReutilizabil className="text-reutilizabil-3" text={titluProfil} />
      <div className="profile-image">
        {userData.imageUrl && <img src={userData.imageUrl} alt="Profile" />}
        <input type="file" onChange={handleFileUpload} />
      </div>
      <div className="profile-details">
        <p>Nume: {userData.nume}</p>
        <p>Varsta: {userData.varsta}</p>
        <p>Oras: {userData.oras}</p>
        <p>Descriere: {userData.descriere}</p>
        <p>Email: {userData.email}</p>
      </div>
      {renderError(errorMessages.message)}
    </div>
  );

  return (
    <div className="profil-items">
      <div className="top-bar"></div>
      {renderForm()}
      <Sfera />
    </div>

  );
};
