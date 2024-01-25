import React from "react";
import "./ButoanePaginaStudiu.css"
import {
    LECTII,
    TEME,
    TESTE
} from "../../elemente/constante/TitluConstant";
import ButonReutilizabil from "../../elemente/butoane/ButonReutilizabil";


const ButoanePaginaStudiu = ({ onClick }) => {

    const lectii = LECTII;
    const teme = TEME;
    const teste = TESTE;

    return (
            <div className="lectii-teme-teste">
                <ButonReutilizabil onClick={() => onClick("Lectii")} text={lectii} className="buton-publicare"/>
                <ButonReutilizabil onClick={() => onClick("Teme")} text={teme} className="buton-publicare"/>
                <ButonReutilizabil onClick={() => onClick("Teste")} text={teste} className="buton-publicare"/>
            </div>
    );
};

export default ButoanePaginaStudiu;
