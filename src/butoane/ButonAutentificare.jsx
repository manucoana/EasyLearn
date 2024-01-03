import React from "react";
import "./ButonAutentificare.css";

const ButonAutentificare = ({ onClick, text, color }) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    }
    const buttonStyle = {
        backgroundColor: color,
    };

    return (
        <button className="buton-autentificare" style={buttonStyle} onClick={handleClick} >
            {text}
        </button>
    );
};

export default ButonAutentificare;