import React, { useState, useEffect } from "react";
import "./PaginaStudiu.css";
import axios from "axios";
import ButoanePaginaStudiu from "./ButoanePaginaStudiu";
import NavigarePagina from "../../navigare/NavigarePagina";
import CitesteMaterial from "../material/CitesteMaterial";

const PaginaStudiu = ({ email }) => {

    const [activePage, setActivePage] = useState("");
    const [numeElev, setNumeElev] = useState([]);

    const onClick = (page) => {
        setActivePage(page);
    };

    useEffect(() => {
        axios
            .get(`http://localhost:3001/api/easylearn-users/info-utilizatori/${email}`)
            .then((response) => {
                const numeElev = response.data.nume;
                setNumeElev(numeElev);
            })
            .catch((error) => {
                console.log(error);

            });
    }, [email]);

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
                    <NavigarePagina activePage={activePage} email={email} />
                    <CitesteMaterial numeElev={numeElev} activePage={activePage} />
                </div>
                <div className="panou-dreapta"></div>
            </div>
        </div>
    );
};

export default PaginaStudiu;