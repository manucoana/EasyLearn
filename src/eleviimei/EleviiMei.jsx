import React, { useState, useEffect } from "react";
import axios from "axios";
import ElevulMeu from "./ElevulMeu";
import "./EleviiMei.css";
import TextReutilizabil from "../text/TextReutilizabil";

const EleviiMei = ({ email }) => {
  const [userEmail, setUserEmail] = useState({});
  const [numeElev, setNumeElev] = useState([]);
  const [errorMessages, setErrorMessages] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/profil/${email}`)
      .then((response) => {
        const userEmail = response.data;
        setUserEmail(userEmail);
        setErrorMessages({});
      })
      .catch((error) => {
        console.log(error);
        setErrorMessages({ message: "Eroare la preluarea datelor din profil" });
      });
  }, [email]);

  useEffect(() => {
    if (userEmail.nume) {
      axios
        .get(`http://localhost:3001/api/elevi/${userEmail.nume}`)
        .then((response) => {
          const numeElev = response.data;
          setNumeElev(numeElev);
          setErrorMessages({});
        })
        .catch((error) => {
          console.log(error);
          setErrorMessages({ message: "Eroare la preluarea datelor din elevi" });
        });
    }
  }, [userEmail.nume]);

  const renderError = (message) => message && <div className="error">{message}</div>;

  return (
    <div className="elevii-mei-items">
        <div className="titlu-elevii-mei">
      <TextReutilizabil className="text-reutilizabil-5" text="ELEVII MEI" />
      </div>
      {renderError(errorMessages.message)}
      <div className="lista-elevi">
        <ElevulMeu elevi={numeElev} />
      </div>
    </div>
  );
};

export default EleviiMei;