import React from "react";
import Titlu from "../../../elemente/text/Titlu";
import SferaUtilizator from "../../../layout/sfera/SferaUtilizator";
import "./PanouUtilizator.css"

const PanouUtilizator = ({ userData, children, profesorData }) => {
    if (!userData) {
        return null;
    }

    console.log (userData)
    return (
        <>
        <div userData={userData} className="utilizator-items">
            <div profesorData={profesorData} userData={userData} className={`panou ${userData.tip_utilizator}`}>
                <Titlu />
                {children}
            </div>
            <SferaUtilizator userData={userData} />
        </div>
        </>
    );
};

export default PanouUtilizator;