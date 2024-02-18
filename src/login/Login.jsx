import React, { useState } from "react";
import axios from "axios";
import { Register } from "../register/Register";
import FormLogin from "./form/FormLogin";
import Elev from "../utilizator/elev/menu/Elev";
import Profesor from "../utilizator/profesor/menu/Profesor";
import useFetchUserData from "../utilizator/user-data/useFetchUserData";

export const Login = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [tipUtilizator, setTipUtilizator] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  const { userData } = useFetchUserData(email);

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
        setEmail(users[0].email);

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

  console.log("bbbb" + userData);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {showRegister &&
        <Register handleRegister={handleRegister} />
      }
      {isLoggedIn && (
        <div>
          {tipUtilizator === "Elev" &&
            <Elev userData={userData} />
          }
          {tipUtilizator === "Profesor" &&
            <Profesor userData={userData} />
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