import React, { useState } from "react";
import ProfesorInfo from "../../elev/menu/ProfesorInfo";
import SferaUtilizator from "../../../layout/sfera/SferaUtilizator";

const SpinAnimation = ({ userData, profesorData }) => {

    const [showProfesorInfo, setShowProfesorInfo] = useState(false);
    const [spin, setSpin] = useState(false);

    const toggleProfesorInfo = () => {
        setShowProfesorInfo(!showProfesorInfo);
        setSpin(true);
    };

    const toggleBackToSfera = () => {
        setShowProfesorInfo(false);
        setSpin(true);
    };


    return (
        <div className={spin ? "spin-animation" : ""} onAnimationEnd={() => setSpin(false)}>
            {showProfesorInfo ? (
                <ProfesorInfo profesorData={profesorData} onClick={toggleBackToSfera} />
            ) : (
                <SferaUtilizator userData={userData} onClick={toggleProfesorInfo} />
            )}
        </div>
    );
};

export default SpinAnimation;