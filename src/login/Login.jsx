import React, { useState } from "react";
import axios from "axios";
import { Register } from "../register/Register";
import FormLogin from "./form/FormLogin";
import Student from "../student/Student";
import Profesor from "../profesor/Profesor";

export const Login = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userType, setUserType] = useState(null);
  const [showRegister, setShowRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    const { email, parola } = event.target.elements;

    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:3001/api/login", {
        email: email.value,
        password: parola.value,
      });

      const users = response.data;
      if (Array.isArray(users) && users.length > 0) {
        setUserEmail(users[0].email);

        const userTypeResponse = await axios.get(`http://localhost:3001/api/userType/${email.value}`);
        const userType = userTypeResponse.data.userType;

        if (userType === "Elev" || userType === "Profesor") {
          setUserType(userType);
          setIsLoggedIn(true);
          setErrorMessages({});
        } else {
          setErrorMessages({
            name: "email",
            message: "User type not recognized",
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
        message: "Completati campurile obligatorii!",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (userData) => {
    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:3001/api/users/register", userData);
      console.log(response.data);
      setShowRegister(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderError = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {showRegister && <Register handleRegister={handleRegister} />}
      {isLoggedIn ?
      (userType === "Elev" ? <Student email={userEmail} /> 
      : userType === "Profesor" ? <Profesor email={userEmail} /> 
      : null) 
      : null}
      {!isLoading && !showRegister && !isLoggedIn && (
        <div className="form-container">
          <FormLogin handleLogin={handleLogin} renderError={renderError} setShowRegister={setShowRegister} />
        </div>
      )}
    </>
  );
};