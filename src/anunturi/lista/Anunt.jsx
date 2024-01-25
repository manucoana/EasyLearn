import React, { useState } from "react";
import ImagineProfil from "../../profil/ImagineProfil";
import { NUME, MATERIE } from "../../elemente/constante/InfoUtilizatorConstant";
import DetaliiAnunt from "../detalii/DetaliiAnunt";
import "./Anunt.css";

const Anunt = ({ anunturi, idUtilizator }) => {

    const [profesorSelectat, setProfesorSelectat] = useState(false);

    const handleListItemClick = (profesor) => {
        setProfesorSelectat(profesor);
    };

    const deschideAnunt = () => {
        if (profesorSelectat) {
            return (
                <DetaliiAnunt numeProfesor={profesorSelectat.nume_profesor} email={profesorSelectat.email} idUtilizator={idUtilizator} />
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

    return deschideAnunt();
};
export default Anunt;
