import React, { useState } from "react";
import { registerUser } from "../api/registerUser";
import FormInregistrare from "./form/FormInregistrare";
import TipProfil from "./form/TipProfil";

export const Register = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [tipProfil, setTipProfil] = useState('');
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleRegister = async (event) => {
    event.preventDefault();
    const { nume, varsta, oras, email, parola } = event.target.elements;
    const data = {
      nume: nume.value,
      varsta: varsta.value,
      oras: oras.value,
      descriere: tipProfil,
      email: email.value,
      parola: parola.value,
    };

    const result = await registerUser(data);

    if (result.success) {
      setIsSubmitted(true);
      setSuccessMessage('Înregistrare completă!');
    } else {
      setErrorMessages({ message: result.error });
    }
  };

  const handleProfilSelect = (selectedProfil) => {
    setTipProfil(selectedProfil);
    setShowRegisterForm(true);
  };

  const renderError = (message) => (
    message && (
      <div className="error">{message}</div>
    )
  );

  const renderSuccessMessage = () => (
    <div>
      <p>{successMessage}</p>
    </div>
  );

  return (
    <div>
      {!showRegisterForm && <TipProfil onSelect={handleProfilSelect} />}
      {showRegisterForm && (
        <>
          {isSubmitted ? (
            renderSuccessMessage()
          ) : (
            <FormInregistrare handleRegister={handleRegister} renderError={renderError} errorMessages={errorMessages} />
          )}
        </>
      )}
    </div>
  );
};
