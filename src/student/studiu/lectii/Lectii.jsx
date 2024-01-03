import React from 'react';
import StudiuLayout from '../../../layout/studiu/StudiuLayout';
import InfoBox from "../../../box/InfoBox";
import TextReutilizabil from '../../../text/TextReutilizabil';
import IconLectii from '../../../imagini/icons/IconLectii';
import "./Lectii.css";


const Lectii = () => {
    const lectii = ['Lecția 1', 'Lecția 2', 'Lecția 3'];

    return (
        <div className='lectii-items'>
            <InfoBox className="info-box-1">
                <div>
                    <TextReutilizabil className="lectii" text="Lectii" fontSize="2em" color="#f2f3f4" />
                    <IconLectii />
                </div>
            </InfoBox>
            <StudiuLayout items={lectii} title="Lecții" />
        </div >
    );
};

export default Lectii;