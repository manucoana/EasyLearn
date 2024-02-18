import React, { useState } from "react";
import "./ElevulMeu.css";
import IncarcareMaterial from "../incarcare/IncarcareMaterial";
import ImagineProfil from "../../../comun/profil/imagine/ImagineProfil";

const ElevulMeu = ({ elev, userData, elevData }) => {
  const [selectedElev, setSelectedElev] = useState(null);

  const handleElevClick = () => {
    setSelectedElev(elev);
  };

  const renderContent = () => {
    if (selectedElev) {
      return (
        <IncarcareMaterial idElev={selectedElev.id_elev} userData={userData} elevData={elevData} numeElev={selectedElev.nume_elev} numeProfesor={userData.nume}
        />
      );
    }

    return (
      <div className="elevul-meu-item" onClick={handleElevClick}>
        <ImagineProfil userData={elev.elevData || {}} />
        <p>{elev.detalii_elev.nume}</p>
      </div>
    );
  };

  return renderContent();
};

export default ElevulMeu;