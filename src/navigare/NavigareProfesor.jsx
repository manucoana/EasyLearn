import React, { useState, useEffect } from "react";
import axios from "axios";
import './NavigareProfesor.css'
import ListaInscris from "./ListaInscris";

const NavigareProfesor = ({ userData, onProfessorSelect }) => {
    const [profesori, setProfesori] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/api/meditatii/inscris/profesori/${userData.id}`)
            .then(response => {
                setProfesori(response.data);
            })
            .catch(error => {
                console.error("Nu exista profesori:", error);
            });
    }, [userData.id]);

    return (
        <div>
            <ListaInscris userData={userData} profesori={profesori} onProfessorSelect={onProfessorSelect} />
        </div>
    );
};

export default NavigareProfesor;
