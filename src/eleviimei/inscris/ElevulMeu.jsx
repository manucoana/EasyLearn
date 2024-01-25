import React, { useState } from "react";
import LogoComponent from "../../imagini/logo/LogoComponent";
import "./ElevulMeu.css";
import IncarcareMaterial from "../incarcare/IncarcareMaterial";

const ElevulMeu = ({ elevi, numeProfesor }) => {
  
  const [selectedElev, setSelectedElev] = useState(null);

  const handleListItemClick = (elev) => {
    setSelectedElev(elev);
  };

  const renderContent = () => {
    if (selectedElev) {
      return (
        <IncarcareMaterial numeElev={selectedElev.nume_elev} numeProfesor={numeProfesor} />
      );
    }

    return (
      <ul className="elevul-meu-list">
        {elevi.map((elev, index) => (
          <li
            className="elevul-meu-list-item"
            key={index}
            onClick={() => handleListItemClick(elev)}
          >
            <LogoComponent />
            <div className="elevul-meu-list-content">
              <p>{elev.nume_elev}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return renderContent();
};

export default ElevulMeu;
