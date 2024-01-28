import React, { useState, useEffect } from "react";
import axios from "axios";
import ElevulMeu from "./ElevulMeu";
import "./EleviiMei.css";

const EleviiMei = ({ userData }) => {

  const [numeProfesor, setNumeProfesor] = useState([]);
  const [numeElev, setNumeElev] = useState([]);
  const [idProfesor, setIdProfesor] = useState(null);
  const [errorMessages, setErrorMessages] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/easylearn-users/info-utilizatori/${userData.email}`)
      .then((response) => {

        const numeProfesor = response.data.nume;
        const idProfesor = response.data.id;

        setNumeProfesor(numeProfesor);
        setIdProfesor(idProfesor);
        setErrorMessages({});
      })
      .catch((error) => {
        console.log(error);
        setErrorMessages({ message: "Eroare la preluarea datelor din profil" });
      });
  }, [userData.email]);

  useEffect(() => {
    if (idProfesor) {
      axios
        .get(`http://localhost:3001/api/meditatii/inscris/${idProfesor}`)
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
  }, [idProfesor]);

  const renderError = (message) => message && <div className="error">{message}</div>;

  return (
    <div className="elevii-mei-items">
      <div className="row">
        <div className="panou-stanga"></div>
        {renderError(errorMessages.message)}
        <div className="lista-elevi">
          <ElevulMeu
            email={userData.email}
            elevi={numeElev}
            numeProfesor={numeProfesor} />
        </div>
        <div className="panou-dreapta"></div>
      </div>
    </div>
  );
};

export default EleviiMei;