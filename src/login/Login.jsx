import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { Register } from "../register/Register";
import FormLogin from "./form/FormLogin";
import Student from "../student/Student";

export const Login = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
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
        setIsLoggedIn(true);
        setErrorMessages({});
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
      {isLoggedIn ? <Student email={userEmail} /> : null}
      {!isLoading && !showRegister && !isLoggedIn && (
        <div className="form-container">
          <FormLogin handleLogin={handleLogin} renderError={renderError} setShowRegister={setShowRegister} />
        </div>
      )}
    </>
  );
};
