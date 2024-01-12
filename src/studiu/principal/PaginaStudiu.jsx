import React, { useState, useEffect } from "react";
import "./PaginaStudiu.css";
import ButoanePaginaStudiu from "./ButoanePaginaStudiu";
import TextReutilizabil from "../../text/TextReutilizabil";
import { PAGINA_STUDIU } from "../../constante/TitluConstant"
import NavigarePagina from "../../piese/NavigarePagina";

const PaginaStudiu = ({ email }) => {

    const paginaStudiu = PAGINA_STUDIU;

    const [activePage, setActivePage] = useState("");

    const handleButtonClick = (page) => {
        setActivePage(page);
    };

    useEffect(() => {
        const gestioneazaNavigare = (event) => {
            setActivePage(event.state?.page || "");
        };

        window.addEventListener("popstate", gestioneazaNavigare);

        return () => {
            window.removeEventListener("popstate", gestioneazaNavigare);
        };
    }, []);


    return (
        <div className="studiu-items">
            <TextReutilizabil className="text-reutilizabil-3" text={paginaStudiu} />
            <ButoanePaginaStudiu handleButtonClick={handleButtonClick} />
            <NavigarePagina activePage={activePage} email={email} />
        </div>
    );
};

export default PaginaStudiu;