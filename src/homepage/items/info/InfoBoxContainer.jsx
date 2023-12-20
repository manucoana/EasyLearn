import React from "react";
import "./InfoBoxContainer.css";
import InfoBox from "./InfoBox";

const InfoBoxContainer = () => {
    return (
        <div className="info-box-container">
            <InfoBox className="info-box-a"></InfoBox>
            <InfoBox className="info-box-b"></InfoBox>
            <InfoBox className="info-box-c"></InfoBox>
        </div>
    );
};

export default InfoBoxContainer;
