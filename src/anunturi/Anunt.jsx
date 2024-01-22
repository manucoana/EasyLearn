import React, { useState } from "react";
import ImagineProfil from "../profil/ImagineProfil";
import { NUME, MATERIE } from "../constante/InfoUtilizatorConstant";
import DetaliiAnunt from "./DetaliiAnunt";
import "./Anunt.css";

const Anunt = ({ anunturi }) => {

    const [selectedProfesor, setSelectedProfesor] = useState(false);

    const handleListItemClick = (profesor) => {
        setSelectedProfesor(profesor);
    };

    const renderContent = () => {
        if (selectedProfesor) {
            return (
                <DetaliiAnunt numeProfesor={selectedProfesor.nume_profesor} email={selectedProfesor.email} />
            );
        }
        return (
            <ul className="lista-anunturi">
                {anunturi.map((anunt, index) => (
                    <li
                        key={anunt.id_anunt}
                        className={index % 2 === 0 ? "par" : "impar"}
                        onClick={() => handleListItemClick(anunt)}
                    >
                        <ImagineProfil nume_profesor={anunt.nume_profesor} email={anunt.email} />
                        <div className="campuri-anunut">
                            <strong>{NUME}</strong> {anunt.nume_profesor}
                            <br />
                            <strong>{MATERIE}</strong> {anunt.materie || "N/A"}
                            <br />
                        </div>
                    </li>
                ))}
            </ul>
        );
    };

    return renderContent();
};
export default Anunt;
