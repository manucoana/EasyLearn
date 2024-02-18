import React, { useState, useEffect } from "react";
import axios from "axios";
import ElevulMeu from "./ElevulMeu";
import "./EleviiMei.css";

const EleviiMei = ({ userData }) => {
  const [elevi, setElevi] = useState([]);
  const [errorMessages, setErrorMessages] = useState({});

  useEffect(() => {
    if (userData?.id) {
      axios
        .get(`http://localhost:3001/api/meditatii/inscris/${userData?.id}`)
        .then((response) => {
          const elevi = response.data.map((elev) => ({
            ...elev,
            elevData: elev.detalii_elev,
          }));
          setElevi(elevi);
          setErrorMessages({});
        })
        .catch((error) => {
          console.log(error);
          setErrorMessages({
            message: "Eroare la preluarea datelor din elevi",
          });
        });
    }
  }, [userData?.id]);

  const renderError = (message) => message && <div className="error">{message}</div>;

  return (
    <div className="elevii-mei-items">
        {renderError(errorMessages.message)}
        <div className="elevul-meu-list">
          {elevi.map((elev) => (
            <ElevulMeu key={elev.id_elev} elev={elev} userData={userData} />
          ))}
        </div>
      </div>
  );
};

export default EleviiMei;