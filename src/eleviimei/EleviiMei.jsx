import React, { useState, useEffect } from "react";
import axios from "axios";
import ElevulMeu from "./ElevulMeu";
import "./EleviiMei.css";

const EleviiMei = ({ email }) => {
  const [userEmail, setUserEmail] = useState({});
  const [numeProfesor, setNumeProfesor] = useState([]);
  const [numeElev, setNumeElev] = useState([]);
  const [errorMessages, setErrorMessages] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/easylearn-users/info-utilizatori/${email}`)
      .then((response) => {
        const userEmail = response.data;
        const numeProfesor = response.data.nume;
        setUserEmail(response.email);
        setNumeProfesor(numeProfesor);
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
        .get(`http://localhost:3001/api/elev/elev-inscris/${userEmail.nume}`)
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
      </div>
      {renderError(errorMessages.message)}
      <div className="lista-elevi">
        <ElevulMeu
          elevi={numeElev}
          numeProfesor={numeProfesor} />
      </div>
    </div>
  );
};

export default EleviiMei;