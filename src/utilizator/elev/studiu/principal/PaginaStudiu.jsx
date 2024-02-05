import React, { useState, useEffect } from "react";
import "./PaginaStudiu.css";
import ButoanePaginaStudiu from "./ButoanePaginaStudiu";
import NavigarePagina from "../../../../navigare/NavigarePagina";
import CitesteMaterial from "../material/CitesteMaterial";
import ProfesorInfo from "../../menu/ProfesorInfo";

const PaginaStudiu = ({ userData, profesorData }) => {

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
            <ButoanePaginaStudiu onClick={onClick} />
            <div className="elemente-studiu">
                {/*   <div className="panou-stanga"></div> */}
                <div className="panou-studiu">
                    <NavigarePagina activePage={activePage} userData={userData} />
                    <CitesteMaterial numeElev={userData.nume} activePage={activePage} />
                </div>
                <div className="panou-dreapta">
                    {profesorData ? (
                        <ProfesorInfo profesorData={profesorData} />
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default PaginaStudiu;