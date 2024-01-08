import React from "react";
import "./DetaliiProfil.css";

const DetaliiProfil = ({ userData, handleFileUpload }) => (
  <div className="titlu-campuri">
    <div className="profile-image">
      {userData.imageUrl && <img src={userData.imageUrl} alt="Profile" />}
      <input type="file" onChange={handleFileUpload} />
    </div>
    <div className="detalii-profil">
      <p>Nume: {userData.nume}</p>
      <p>Varsta: {userData.varsta}</p>
      <p>Oras: {userData.oras}</p>
      <p>Descriere: {userData.descriere}</p>
      <p>Email: {userData.email}</p>
    </div>
  </div>
);

export default DetaliiProfil;
