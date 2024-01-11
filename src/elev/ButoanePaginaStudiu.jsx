import React from "react";
import "./ButoanePaginaStudiu.css"
import IconLectii from "../imagini/icons/IconLectii";
import IconTeme from "../imagini/icons/IconTeme";
import IconTeste from "../imagini/icons/IconTeste";
import TextReutilizabil from "../text/TextReutilizabil";
import InfoBox from "../box/InfoBox";
import {
    LECTII,
    TEME,
    TESTE
} from "../constante/TitluConstant";

const ButoanePaginaStudiu = ({ handleButtonClick }) => {

    const lectii = LECTII;
    const teme = TEME;
    const teste = TESTE;

    return (
            <div className="lectii-teme-teste">
                <InfoBox onClick={() => handleButtonClick("Lectii")} className="info-box-4">
                    <div>
                        <TextReutilizabil className="text-reutilizabil-3" text={lectii}/>
                        <IconLectii />
                    </div>
                </InfoBox>
                <InfoBox onClick={() => handleButtonClick("Teme")} className="info-box-4">
                    <div>
                        <TextReutilizabil className="text-reutilizabil-3"  text={teme}/>
                        <IconTeme />
                    </div>
                </InfoBox>

                <InfoBox onClick={() => handleButtonClick("Teste")} className="info-box-4">
                    <div>
                        <TextReutilizabil className="text-reutilizabil-3" text={teste}/>
                        <IconTeste />
                    </div>
                </InfoBox>
            </div>
    );
};

export default ButoanePaginaStudiu;
