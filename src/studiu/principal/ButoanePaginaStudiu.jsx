import React from "react";
import "./ButoanePaginaStudiu.css"
import {
    LECTII,
    TEME,
    TESTE
} from "../../constante/TitluConstant";
import ButonReutilizabil from "../../butoane/ButonReutilizabil";


const ButoanePaginaStudiu = ({ handleButtonClick }) => {

    const lectii = LECTII;
    const teme = TEME;
    const teste = TESTE;

    return (
            <div className="lectii-teme-teste">
                <ButonReutilizabil onClick={() => handleButtonClick("Lectii")} text={lectii} className="buton-publicare"/>
                <ButonReutilizabil onClick={() => handleButtonClick("Teme")} text={teme} className="buton-publicare"/>
                <ButonReutilizabil onClick={() => handleButtonClick("Teste")} text={teste} className="buton-publicare"/>
            </div>
    );
};

export default ButoanePaginaStudiu;
