import React from "react";

const TextReutilizabil =  ({ text, color, fontSize, textAlign }) => {


    const textStyle = {
        color: color || "#0D114D",
        fontSize: fontSize || "1em",
        textAlign: textAlign || "left",
        
    };

    return (
        <div className="container-text">
            <h1 className="text" style={textStyle}>
                {text}
            </h1>
        </div>
    );
};

export default TextReutilizabil;
