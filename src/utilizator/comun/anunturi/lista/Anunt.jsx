import React, { useState } from "react";
import ImagineProfil from "../../profil/imagine/ImagineProfil";
import { NUME, MATERIE } from "../../../../elemente/constante/InfoUtilizatorConstant";
import "./Anunt.css";
import DetaliiAnunt from "../detalii/DetaliiAnunt";

const Anunt = ({ userData, anunturi }) => {
    
    const [profesorSelectat, setProfesorSelectat] = useState(null);
    const [showDetails, setShowDetails] = useState(false);

    const handleAnuntClick = (profesor) => {
        setProfesorSelectat(profesor);
        setShowDetails(true);
    };

    const handleBackClick = () => {
        setShowDetails(false);
    };

    const deschideAnunt = () => {
        if (showDetails) {
            return (
                <div className="deschide-anunt-items">
                    <DetaliiAnunt idUtilizator={userData.id} email={profesorSelectat.email} />
                    <button className="close-button" onClick={handleBackClick}> X </button>
                </div>
            );
        }
        return null;
    };
    
    return (
        <div className="lista">
            {deschideAnunt()}
            <ul className="lista-anunturi">
                {anunturi.map((anunt, index) => (
                    <li key={anunt.id_anunt} className={index % 2 === 0 ? "par" : "impar"} onClick={() => handleAnuntClick(anunt)}>
                        <ImagineProfil userData={anunt || {}} />
                        <div className="campuri-anunut">
                            <strong>{NUME}</strong> {anunt.nume_profesor}
                            <br />
                            <strong>{MATERIE}</strong> {anunt.materie || "N/A"}
                            <br />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Anunt;
