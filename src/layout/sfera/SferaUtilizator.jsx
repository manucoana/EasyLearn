import React from "react";
import Sfera from "./Sfera";
import ImagineProfil from "../../utilizator/comun/profil/imagine/ImagineProfil";
import TextReutilizabil from "../../elemente/text/TextReutilizabil";

const SferaUtilizator = ({ userData }) => {
    return (
        <Sfera>
            <ImagineProfil userData={userData} />
            <TextReutilizabil className="text-normal" text={userData.nume} />
            <TextReutilizabil className="text-mic" text={userData.tip_utilizator} />
        </Sfera>
    );
};

export default SferaUtilizator;