import React from "react";
import StudiuLayout from "../../../layout/studiu/StudiuLayout";
import TextReutilizabil from '../../../text/TextReutilizabil';
import IconTeste from "../../../imagini/icons/IconTeste";
import InfoBox from "../../../box/InfoBox";

const Teste = ({ onClose }) => {

    const lectii = ['Testul 1', 'Testul 2', 'Testul 3'];

    return (
        <div className='lectii-items'>
            <InfoBox className="info-box-1">
                <div>
                    <TextReutilizabil className="teste" text="Teste" fontSize="2em" color="#f2f3f4" />
                    <IconTeste/>
                </div>
            </InfoBox>
            <StudiuLayout items={lectii} title="Teste" />;
        </div >
    );
};

export default Teste;