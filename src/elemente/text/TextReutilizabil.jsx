import React from "react";
import "./TextReutilizabil.css";

const TextReutilizabil = ({ className, text }) => {
    return (
        <div className="text">
            <h1 className={`text ${className}`}>
                {text}
            </h1>
        </div>
    );
};

export default TextReutilizabil;
