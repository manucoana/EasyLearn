import React from "react";
import StudiuLayout from "../../../layout/studiu/StudiuLayout";
import TextReutilizabil from '../../../text/TextReutilizabil';
import InfoBox from "../../../box/InfoBox";
import IconTeme from "../../../imagini/icons/IconTeme";

const Teme = ({ onClose }) => {

    const lectii = ['Tema 1', 'Tema 2', 'Tema 3'];

    return (
        <div className='lectii-items'>
            <InfoBox className="info-box-1">
                <div>
                    <TextReutilizabil className="teme" text="Teme" fontSize="2em" color="#f2f3f4" />
                    <IconTeme/>
                </div>
            </InfoBox> <StudiuLayout items={lectii} title="Teme" />;</div >
    );
};
export default Teme;

