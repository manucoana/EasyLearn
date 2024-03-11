import React from "react";
import "./ElevulMeu.css";
import NumeIconElev from "./NumeIconElev";

const ElevulMeu = ({ elev, onSelectElev }) => {
  const handleElevClick = () => {
    onSelectElev(elev);
  };

  return (
    <div className="elevul-meu-item" onClick={handleElevClick}>
      <NumeIconElev userData={elev.elevData || {}} numeElev={elev.detalii_elev.nume} />
    </div>
  );
};

export default ElevulMeu;
