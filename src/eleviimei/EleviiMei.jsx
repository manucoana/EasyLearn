import React, { useState, useEffect } from "react";
import axios from "axios";
import ListaElevi from "./ListaElevi";
import "./EleviiMei.css";
import TextReutilizabil from "../text/TextReutilizabil";

const EleviiMei = ({ email }) => {
    const [userData, setUserData] = useState({});
    const [eleviInfo, setEleviInfo] = useState([]);
    const [errorMessages, setErrorMessages] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:3001/api/profil/${email}`)
            .then((response) => {
                const user = response.data;
                setUserData(user);
                setErrorMessages({});
            })
            .catch((error) => {
                console.log(error);
                setErrorMessages({ message: "Error fetching user data" });
            });
    }, [email]);

    useEffect(() => {
        if (userData.nume) {
            axios
                .get(`http://localhost:3001/api/elevi/${userData.nume}`)
                .then((response) => {
                    const elevData = response.data;
                    setEleviInfo(elevData);
                    setErrorMessages({});
                })
                .catch((error) => {
                    console.log(error);
                    setErrorMessages({ message: "Error fetching eleviInfo data" });
                });
        }
    }, [userData.nume]);

    const renderError = (message) => message && <div className="error">{message}</div>;

    return (
        <div className="elevii-mei-items">
            <TextReutilizabil className="text-reutilizabil-5" text="Elevii mei" />
            {renderError(errorMessages.message)}
            <div className="lista-elevi">
                <ListaElevi eleviInfo={eleviInfo} />
            </div>
        </div>
    );
};

export default EleviiMei;
