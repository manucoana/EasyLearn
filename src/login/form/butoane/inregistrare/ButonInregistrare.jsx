import React from "react";
import "./ButonInregistrare.css"

const ButonInregistrare = ({ onClick }) => {
    
    return (
        <button className="buton-inregistrare" onClick={onClick}>
        Inregistrare
      </button>
    );
};

export default ButonInregistrare;