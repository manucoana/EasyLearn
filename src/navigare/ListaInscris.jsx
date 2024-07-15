import React, { useState } from "react";
import "./NavigareProfesor.css";
import ImagineProfil from "../utilizator/comun/profil/imagine/ImagineProfil";
import EleviList from "./EleviList";

const ProfesorList = ({ profesori, onProfessorSelect }) => {
    const handleClickProfessor = (profesor) => {
        onProfessorSelect(profesor);
    };

    return (
        <div className="list-profesori-items">
            <ul className="list-profesori">
                {profesori.map((profesor, index) => (
                    <li key={index} onClick={() => handleClickProfessor(profesor.detalii_profesor)}>
                        {profesor.detalii_profesor.nume}
                        <ImagineProfil userData={profesor.detalii_profesor || {}} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

const ListaInscris = ({ userData, onProfessorSelect, profesori, eleviInscrisi }) => {
    return (
        <div className="main-container">
            {userData.tip_utilizator === "Elev" ? (
                <ProfesorList profesori={profesori} onProfessorSelect={onProfessorSelect} />
            ) : userData.tip_utilizator === "Profesor" ? (
                <EleviList eleviInscrisi={eleviInscrisi} userData={userData} />
            ) : (
                <div>Admin</div>
            )}
        </div>
    );
};

export default ListaInscris;
