import React, { useState } from "react";
import axios from "axios";

import "./Login.css";
import { Register } from "../register/Register";

import FormLogin from "./form/componenta/FormLogin";
import Student from "../student/Student";

export const Login = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isValidLogin, setIsValidLogin] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    const { email, parola } = event.target.elements;

    axios
      .post("http://localhost:3001/api/login", {
        email: email.value,
        password: parola.value,
      })
      .then((response) => {
        const users = response.data;
        if (Array.isArray(users) && users.length > 0) {
          setUserEmail(users[0].email);
          setIsValidLogin(true);
          setIsLoggedIn(true);
          setErrorMessages({});
        } else {
          setErrorMessages({
            name: "email",
            message: "Invalid email or password",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        setErrorMessages({ name: "email", message: "Error logging in" });
      });
  };

  const handleRegister = (userData) => {
    setIsLoading(true);
    axios
      .post("http://localhost:3001/api/users/register", userData)
      .then((response) => {
        console.log(response.data);
        setIsLoading(false);
        setShowRegister(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const renderError = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = () => (
    <div className="form-container">
     <FormLogin handleLogin={handleLogin} renderError={renderError} setShowRegister={setShowRegister}></FormLogin>
    </div>
  );

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {showRegister && <Register handleRegister={handleRegister} />}
      {isLoggedIn && <Student email={userEmail} />}
      {!isLoading && !showRegister && !isLoggedIn && renderForm()}
    </>
  );
};
