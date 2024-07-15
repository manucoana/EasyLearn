import React, { useState, useEffect } from "react";
import axios from "axios";
import ElevulMeu from "../utilizator/profesor/eleviimei/inscris/ElevulMeu";
import "./NavigareElev.css"

const NavigareElev = ({ userData, onElevSelect }) => {
  const [elevi, setElevi] = useState([]);
  const [errorMessages, setErrorMessages] = useState({});

  useEffect(() => {
    const fetchEleviData = (userId) => {
      if (userId) {
        axios
          .get(`http://localhost:3001/api/meditatii/inscris/${userId}`)
          .then((response) => {
            const eleviData = response.data.map((elev) => ({
              ...elev,
              elevData: elev.detalii_elev,
            }));
            setElevi(eleviData);
            setErrorMessages({});
          })
          .catch((error) => {
            console.log(error);
            setErrorMessages({
              message: "Eroare la preluarea datelor din elevi",
            });
          });
      }
    };

    fetchEleviData(userData.id);

  }, [userData.id]);

  return (
    <div className="navi-elev">
      {elevi.length > 0 ? (
        elevi.map((elev) => (
          <ElevulMeu key={elev.id} elev={elev} onSelectElev={onElevSelect} />
        ))
      ) : (
        <p>Nu există elevi înscrisi.</p>
      )}
      {errorMessages.message && <p>{errorMessages.message}</p>}
    </div>
  );
};

export default NavigareElev;
