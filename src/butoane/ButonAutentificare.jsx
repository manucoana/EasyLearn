import React from "react";
import "./ButonAutentificare.css";

const ButonAutentificare = ({ className, onClick, text }) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    }

    return (
        <button className={`buton-autentificare ${className}`} onClick={handleClick} >
            {text}
        </button>
    );
};

export default ButonAutentificare;