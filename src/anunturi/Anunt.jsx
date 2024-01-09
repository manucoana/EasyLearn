import React from "react";
import "./Anunt.css";
import LogoComponent from "../imagini/logo/LogoComponent";

const Anunt = ({ anunt, index }) => {
    return (
        <li key={anunt.id_anunt} className={index % 2 === 0 ? "par" : "impar"}>
            <LogoComponent />
            <div className="campuri-anunut">
                <strong>Nume:</strong> {anunt.nume}
                <br />
                <strong>Materie:</strong> {anunt.materie || "N/A"}
                <br />
            </div>
        </li >
    );
};

export default Anunt;
