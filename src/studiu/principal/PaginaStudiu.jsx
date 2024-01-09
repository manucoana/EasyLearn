import React, { useState, useEffect } from "react";
import "./PaginaStudiu.css";
import Lectii from "../lectii/Lectii";
import Teme from "../teme/Teme";
import Teste from "../teste/Teste";
import ButoanePaginaStudiu from "../../piese/elev/ButoanePaginaStudiu";
import TextReutilizabil from "../../text/TextReutilizabil";
import { PAGINA_STUDIU } from "../../constante/TitluConstant"

const PaginaStudiu = ({ email, onClick }) => {

    const paginaStudiu = PAGINA_STUDIU;

    const [activePage, setActivePage] = useState("");

    const handleButtonClick = (page) => {
        setActivePage(page);
        window.history.pushState({ page: page }, page, `${page.toLowerCase()}`);
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


    const renderContent = () => {
        switch (activePage) {
            case "Lectii":
                return <Lectii email={email} />;
            case "Teme":
                return <Teme email={email} />;
            case "Teste":
                return <Teste email={email} />;
            default:
                return (
                    <div className="pagina-studiu-items">
                        <ButoanePaginaStudiu handleButtonClick={handleButtonClick} />
                    </div>

                );
        }
    };
    return (
        <div className="studiu-items">
            <TextReutilizabil className="text-reutilizabil-3" text={paginaStudiu}/>
                {renderContent()}
        </div>
    );
};

export default PaginaStudiu;