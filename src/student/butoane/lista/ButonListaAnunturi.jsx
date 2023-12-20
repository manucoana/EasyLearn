import React from "react";
import "./ButonListaAnunturi.css"

const ButonListaAnunturi = ({ onClick }) => {
    return (
        <button className="buton-lista-anunturi" onClick={onClick}>
            Lista anunturi
        </button>
    );
};

export default ButonListaAnunturi;