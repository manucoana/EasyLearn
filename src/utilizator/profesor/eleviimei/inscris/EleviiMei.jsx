import React, { useState, useEffect } from "react";
import axios from "axios";
import ElevulMeu from "./ElevulMeu";
import "./EleviiMei.css";

const EleviiMei = ({ userData }) => {
  
  const [numeElev, setNumeElev] = useState([]);
  const [errorMessages, setErrorMessages] = useState({});

  useEffect(() => {
    if (userData?.id) {
      axios
        .get(`http://localhost:3001/api/meditatii/inscris/${userData?.id}`)
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
  }, [userData?.id]);

  const renderError = (message) => message && <div className="error">{message}</div>;

  return (
    <div className="elevii-mei-items">
      <div className="row">
      {/*   <div className="panou-stanga"></div> */}
        {renderError(errorMessages.message)}
        <div className="lista-elevi">
          <ElevulMeu
            email={userData.email}
            elevi={numeElev}
            numeProfesor={userData.nume} />
        </div>
       {/*  <div className="panou-dreapta"></div> */}
      </div>
    </div>
  );
};

export default EleviiMei;