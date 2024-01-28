import React, { useState, useEffect } from "react";
import "./PaginaStudiu.css";
import ButoanePaginaStudiu from "./ButoanePaginaStudiu";
import NavigarePagina from "../../../navigare/NavigarePagina";
import CitesteMaterial from "../material/CitesteMaterial";

const PaginaStudiu = ({ userData }) => {

    const [activePage, setActivePage] = useState("");

    const onClick = (page) => {
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
            <ButoanePaginaStudiu onClick={onClick} />
            <div className="elemente-studiu">
                <div className="panou-stanga"></div>
                <div className="panou-studiu">
                    <NavigarePagina activePage={activePage} email={userData.email} />
                    <CitesteMaterial numeElev={userData.nume} activePage={activePage} />
                </div>
                <div className="panou-dreapta"></div>
            </div>
        </div>
    );
};

export default PaginaStudiu;