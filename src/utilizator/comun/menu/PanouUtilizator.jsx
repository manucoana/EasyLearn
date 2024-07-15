import React from "react";
import Titlu from "../../../elemente/text/Titlu";
import SferaUtilizator from "../../../layout/sfera/SferaUtilizator";
import "./PanouUtilizator.css"

const PanouUtilizator = ({ userData, children }) => {
    if (!userData) {
        return null;
    }

    return (
        <div className="utilizator-items">
            <Titlu />
            {children}
            <SferaUtilizator userData={userData} />
        </div>
    );
};

export default PanouUtilizator;
