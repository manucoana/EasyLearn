import React from "react";
import "./InfoBox.css";

const InfoBox = ({ className, children, onClick }) => {
    return (
        <div className={`info-box ${className}`} onClick={onClick}>
            {children}
        </div>
    );
};

export default InfoBox;
