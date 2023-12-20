import React from "react";
import "./ButonPaginaStudiu.css"

const ButonPaginaStudiu = ({ onClick }) => {
    return (
        <button className="buton-pagina-studiu" onClick={onClick}>
            Spre pagina de studiu
        </button>

    );
};

export default ButonPaginaStudiu;