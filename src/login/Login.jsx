import React, { useState } from "react";
import axios from "axios";
import { Register } from "../register/Register";
import FormLogin from "./form/FormLogin";
import Elev from "../elev/Elev";
import Profesor from "../profesor/Profesor";

export const Login = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [tipUtilizator, setTipUtilizator] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    const { email, parola } = event.target.elements;

    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:3001/api/easylearn-users/login", {
        email: email.value,
        password: parola.value,
      });

      const users = response.data;
      if (Array.isArray(users) && users.length > 0) {
        setUserEmail(users[0].email);

        const tipUtilizatorResponse = await axios.get(`http://localhost:3001/api/easylearn-users/info-utilizatori/${email.value}`);
        const tipUtilizator = tipUtilizatorResponse.data.tip_utilizator;

        if (tipUtilizator === "Elev" || tipUtilizator === "Profesor") {
          setTipUtilizator(tipUtilizator);
          setIsLoggedIn(true);
          setErrorMessages({});

        } else {
          setErrorMessages({
            name: "email",
            message: "Tip de utilizator neidentificat",
          });
        }
      } else {
        setErrorMessages({
          name: "email",
          message: "E-mail sau parola invalide",
        });
      }
    } catch (error) {
      console.error(error);
      setErrorMessages({
        name: "email",
        message: "Email sau parola invalide!",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (userData) => {
    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:3001/api/easylearn-users/inregistrare", userData);
      console.log(response.data);
      setShowRegister(false);
    } catch (error) {
      console.error(error);
    }
  };

  const renderError = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {showRegister &&
        <Register handleRegister={handleRegister} />
      }
      {isLoggedIn && (
        <div>
          {tipUtilizator === "Elev" &&
            <Elev email={userEmail} tipUtilizator={tipUtilizator} />
          }
          {tipUtilizator === "Profesor" &&
            <Profesor email={userEmail} tipUtilizator={tipUtilizator} />
          }
        </div>
      )}
      {!isLoading && !showRegister && !isLoggedIn && (
        <div className="form-container">
          <FormLogin handleLogin={handleLogin} renderError={renderError} setShowRegister={setShowRegister} />
        </div>
      )}
    </>
  );
};