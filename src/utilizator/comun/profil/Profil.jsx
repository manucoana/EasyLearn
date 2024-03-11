import React, { useState } from "react";
import "./Profil.css";
import DetaliiProfil from "./detalii/DetaliiProfil";
import InputImagineProfil from "../../../elemente/input/InputImagineProfil";
import TextReutilizabil from "../../../elemente/text/TextReutilizabil";
import handleImagineProfilUpload from "./functii/handleImagineProfilUpload";
import SferaUtilizator from "../../../layout/sfera/SferaUtilizator";
import axios from 'axios';
import EditareDetaliiProfil from "./detalii/EditareDetaliiProfil";

const Profil = ({ userData, activePage }) => {
  const [editableUserData, setEditableUserData] = useState({ ...userData });
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    if (isEditing) {
      const { name, value } = e.target;
      setEditableUserData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleUpdateUser = async () => {
    try {
      const response = await axios.put(`http://localhost:3001/api/profil/update/${userData.id}`, editableUserData);

      console.log(response.data);

    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleImagineProfilUploadWrapper = async (event) => {
    const file = event.target.files[0];
    await handleImagineProfilUpload(file, userData, activePage);
  };

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  return (
    <div className="profil-items">
      <div className="detalii">
        <TextReutilizabil className="text-subtitlu-albastru" text={activePage} />
        {isEditing ? (
          <EditareDetaliiProfil userData={editableUserData} onInputChange={handleInputChange} />
        ) : (
          <DetaliiProfil userData={editableUserData} />
        )}
        <TextReutilizabil className="text-mic" text="Modifica imaginea de profil:" />
        <InputImagineProfil
          className="incarca-imagine"
          imageUrl={editableUserData.imageUrl}
          handleFileUpload={handleImagineProfilUploadWrapper}
        />
        {isEditing ? (
          <button onClick={handleUpdateUser}>Update User</button>
        ) : (
          <button onClick={handleEditButtonClick}>Edit</button>
        )}
      </div>
      <SferaUtilizator userData={userData} />
    </div>
  );
};

export default Profil;
