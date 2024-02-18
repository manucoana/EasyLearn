import React from "react";
import ImagineProfil from "../../../comun/profil/imagine/ImagineProfil";


const ListaElevi = ({ elevi, handleElevClick }) => {

    return (
        <ul className="elevul-meu-list">
            {elevi.map((elev, index) => (
                <li
                    className="elevul-meu-list-item"
                    key={index}
                    onClick={() => handleElevClick(elev)}
                >
                     <ImagineProfil userData={elev || {}} />
                    <p>{elev.nume_elev} </p>
                </li>
            ))}
        </ul>
    
    );
};

export default ListaElevi;
