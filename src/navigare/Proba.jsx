import React from "react";

const Proba = ({ profesorData }) => {
    console.log("Profesor:", profesorData);
    if (!profesorData) {
        return <div>No professor details available.</div>;
    }
    
    return (
        <div>
            <h2>Detalii Profesor</h2>
            <p>Nume: {profesorData.nume}</p>
            <p>Varsta: {profesorData.varsta}</p>
        </div>
    );
};

export default Proba;
