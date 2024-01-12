import React from "react";
import "./InfoBoxContainer.css";
import InfoBox from "../../../box/InfoBox";
import TextReutilizabil from "../../../text/TextReutilizabil";
import {
    BENEFICII_TEXT,
    TITLU_INFOBOX_1,
    TITLU_INFOBOX_2,
    TITLU_INFOBOX_3,
    TITLU_INFOBOX_4,
    TITLU_INFOBOX_5,
    TITLU_INFOBOX_6,
} from "../../../constante/BeneficiuConstant";

import { SUBTITLU_BENEFICII } from "../../../constante/TitluConstant";

const InfoBoxContainer = () => {
    const benefitsText = BENEFICII_TEXT;

    const infoboxes = [
        {
            className: "info-box-3",
            title: TITLU_INFOBOX_1,
            benefits: [benefitsText[0]]
        },
        {
            className: "info-box-3",
            title: TITLU_INFOBOX_2,
            benefits: [benefitsText[1]]
        },
        {
            className: "info-box-3",
            title: TITLU_INFOBOX_3,
            benefits: [benefitsText[2]]
        },
        {
            className: "info-box-3",
            title: TITLU_INFOBOX_4,
            benefits: [benefitsText[3]]
        },
        {
            className: "info-box-3",
            title: TITLU_INFOBOX_5,
            benefits: [benefitsText[4]]
        },
        {
            className: "info-box-3",
            title: TITLU_INFOBOX_6,
            benefits: [benefitsText[5]]
        },
    ];

    return (
        <div className="info-items">
            <TextReutilizabil className="text-reutilizabil-2" text={SUBTITLU_BENEFICII}/>
            <div className="info-box-container">
                {infoboxes.map((infobox, index) => (
                    <InfoBox key={index} className="info-box">
                        {infobox.title && <h2 className="titlu-info-box">{infobox.title}</h2>}
                        <div className="descriere-platforma">
                            {infobox.benefits && (
                                <div>
                                    {infobox.benefits.map((benefit, i) => (
                                        <p key={i}>{benefit}</p>
                                    ))}
                                </div>
                            )}
                        </div>
                    </InfoBox>
                ))}
            </div>
        </div>
    );
};

export default InfoBoxContainer;
