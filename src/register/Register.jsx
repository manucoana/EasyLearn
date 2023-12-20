import React, { useState } from "react";
import { registerUser } from "../api/registerUser";

import "./Register.css";

import FormInregistrare from "./form/componenta/FormInregistrare";

export const Register = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();
    const { nume, varsta, oras, descriere, email, parola } = event.target.elements;
    const data = {
      nume: nume.value,
      varsta: varsta.value,
      oras: oras.value,
      descriere: descriere.value,
      email: email.value,
      parola: parola.value,
    };
  
    const result = await registerUser(data);
  
    if (result.success) {
      setIsSubmitted(true);
      setSuccessMessage('Inregistrare completa!');
    } else {
      setErrorMessages({ message: result.error });
    }
  };

  const renderError = (message) => (
    message && (
      <div className="error">{message}</div>
    )
  );

  const renderForm = () => (
    <FormInregistrare
      handleRegister={handleRegister}
      renderError={renderError}
      errorMessages={errorMessages}
    ></FormInregistrare>
  );

  const renderSuccessMessage = () => (
    <div>
      <p>{successMessage}</p>
    </div>
  );

  return (
    <div>
      {isSubmitted ? renderSuccessMessage() : renderForm()}
    </div>
  );
};
