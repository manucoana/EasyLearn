import React from "react";
import "./ButoanePaginaStudiu.css"
import {
    LECTII,
    TEME,
    TESTE
} from "../../../../elemente/constante/TitluConstant";
import ButonReutilizabil from "../../../../elemente/butoane/ButonReutilizabil";


const ButoanePaginaStudiu = ({ onClick }) => {

    const lectii = LECTII;
    const teme = TEME;
    const teste = TESTE;

    return (
            <nav className="nav-principal">
                <ButonReutilizabil onClick={() => onClick("Lectii")} text={lectii} className="buton-reutilizabil-1"/>
                <ButonReutilizabil onClick={() => onClick("Teme")} text={teme} className="buton-reutilizabil-1"/>
                <ButonReutilizabil onClick={() => onClick("Teste")} text={teste} className="buton-reutilizabil-1"/>
                
                {/* <ButonReutilizabil text="MESAJE" className="buton-reutilizabil-1"/>
                <ButonReutilizabil text="NOTE" className="buton-reutilizabil-1"/>
                <ButonReutilizabil text="VIDEOCONFERINTA" className="buton-reutilizabil-1"/> */}
            </nav>
    );
};

export default ButoanePaginaStudiu;
