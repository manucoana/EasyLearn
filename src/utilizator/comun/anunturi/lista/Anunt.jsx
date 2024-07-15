// Anunt.js
import React, { useState } from "react";
import ImagineProfil from "../../profil/imagine/ImagineProfil";
import { NUME, MATERIE } from "../../../../elemente/constante/InfoUtilizatorConstant";
import "./Anunt.css";
import DetaliiAnunt from "../detalii/DetaliiAnunt";
import Modal from "../../../../homepage/forum/Modal";

const Anunt = ({ userData, anunturi }) => {
    
    const [profesorSelectat, setProfesorSelectat] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleAnuntClick = (profesor) => {
        setProfesorSelectat(profesor);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="lista">
            <Modal isOpen={showModal} onClose={handleCloseModal}>
                {profesorSelectat && (
                    <div className="deschide-anunt-items">
                        <DetaliiAnunt idUtilizator={userData.id} email={profesorSelectat.email} />
                    </div>
                )}
            </Modal>
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
