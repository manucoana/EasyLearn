import React from "react";
import "./InfoBoxContainer.css";
import InfoBox from "../../../box/InfoBox";
import TextReutilizabil from "../../../text/TextReutilizabil";


const InfoBoxContainer = () => {
    const benefitsText = [
        'Lecțiile personalizate cu tutori experimentați îți oferă o experiență de învățare adaptată nevoilor tale unice. Descoperă metode de predare personalizate care să te ajute să atingi potențialul maxim.',
        'Ai acces la o gamă variată de resurse educaționale, care îți permit să explorezi subiecte diverse și să îți dezvolți cunoștințele într-un mod captivant și interactiv.',
        'Platforma prietenoasă și interactivă EasyLearn face învățarea accesibilă pentru toți. Descoperă o experiență de învățare plăcută și eficientă, adaptată ritmului tău.',
        'Primeste feedback detaliat și rapoarte de progres, oferindu-ți vizibilitate asupra performanțelor tale și direcționându-te către îmbunătățire continuă.',
        'Alătură-te unei comunități active, unde poți schimba idei, colabora cu alți învățători și găsi inspirație pentru progresele tale educaționale.',
        'Învățarea devine distractivă cu EasyLearn! Descoperă o platformă care transformă procesul educațional într-o călătorie captivantă și plină de satisfacții.',
    ];

    const infoboxes = [
        {
            className: "info-box-3",
            title: "Personalizare",
            benefits: [benefitsText[0]]
        },
        {
            className: "info-box-3",
            title: "Resurse diversificate",
            benefits: [benefitsText[1]]
        },
        {
            className: "info-box-3",
            title: "Accesibilitate",
            benefits: [benefitsText[2]]
        },
        {
            className: "info-box-3",
            title: "Evaluare",
            benefits: [benefitsText[3]]
        },
        {
            className: "info-box-3",
            title: "Comunitate",
            benefits: [benefitsText[4]]
        },
        {
            className: "info-box-3",
            title: "Distractiv",
            benefits: [benefitsText[5]]
        },
    ];

    return (
        <div className="info-box-items">
            <TextReutilizabil className="titlu-beneficii" text="Care sunt beneficiile platformei EasyLearn?" fontSize="1.87em" color="#f2f3f4" />
            <div className="info-box-container">
                {infoboxes.map((infobox, index) => (
                    <InfoBox key={index} className={infobox.className}>
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
