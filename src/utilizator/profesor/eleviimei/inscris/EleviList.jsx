import React, { useState } from "react";
import ElevulMeu from "./ElevulMeu";
import IncarcareMaterial from "../incarcare/IncarcareMaterial";

const EleviList = ({ eleviInscrisi, userData }) => {
  const [selectedElev, setSelectedElev] = useState(null);

  const handleSelectElev = (elev) => {
    setSelectedElev(elev);
  };

  return (
    <div className="elevul-meu-list-container">
      <div className="elevul-meu-list">
        {eleviInscrisi.map((elev) => (
          <ElevulMeu key={elev.id_elev} elev={elev} userData={userData} onSelectElev={handleSelectElev} />
        ))}
      </div>
      {selectedElev && (
        <div className="full-screen-container">
          <IncarcareMaterial
            idElev={selectedElev.id_elev}
            userData={userData}
            elevData={selectedElev.elevData || {}}
            numeElev={selectedElev.detalii_elev.nume}
            numeProfesor={userData.nume}
          />
        </div>
      )}
    </div>
  );
};

export default EleviList;
