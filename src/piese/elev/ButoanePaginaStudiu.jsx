import React from "react";
import IconLectii from "../../imagini/icons/IconLectii";
import IconTeme from "../../imagini/icons/IconTeme";
import IconTeste from "../../imagini/icons/IconTeste";
import TextReutilizabil from "../../text/TextReutilizabil";
import InfoBox from "../../box/InfoBox";
import {
    LECTII,
    TEME,
    TESTE
} from "../../constante/TitluConstant";

const ButoanePaginaStudiu = ({ handleButtonClick }) => {

    const lectii = LECTII;
    const teme = TEME;
    const teste = TESTE;

    return (
            <div className="lectii-teme-teste">
                <InfoBox onClick={() => handleButtonClick("Lectii")} className="info-box-6">
                    <div>
                        <TextReutilizabil className="text-reutilizabil-2" text={LECTII}/>
                        <IconLectii />
                    </div>
                </InfoBox>
                <InfoBox onClick={() => handleButtonClick("Teme")} className="info-box-6">
                    <div>
                        <TextReutilizabil className="text-reutilizabil-2"  text={TEME}/>
                        <IconTeme />
                    </div>
                </InfoBox>

                <InfoBox onClick={() => handleButtonClick("Teste")} className="info-box-6">
                    <div>
                        <TextReutilizabil className="text-reutilizabil-2" text={TESTE}/>
                        <IconTeste />
                    </div>
                </InfoBox>
            </div>
    );
};

export default ButoanePaginaStudiu;
