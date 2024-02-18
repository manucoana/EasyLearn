import React, { useState, useEffect } from "react";
import "./PaginaStudiu.css";
import ButoanePaginaStudiu from "./ButoanePaginaStudiu";
import NavigarePagina from "../../../../navigare/NavigarePagina";
import CitesteMaterial from "../material/CitesteMaterial";

const PaginaStudiu = ({ userData, profesorData, elevData }) => {

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

    console.log(profesorData)

    return (
        <div className="studiu-items">
            <ButoanePaginaStudiu userData={userData} profesorData={profesorData} onClick={onClick} />
            <div className="elemente-studiu">
                <div className="panou-studiu">
                    <NavigarePagina activePage={activePage} userData={userData} />
                    <CitesteMaterial numeElev={userData.nume} activePage={activePage} />
                </div>
            </div>
        </div>
    );
};

export default PaginaStudiu;