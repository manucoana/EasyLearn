import React, { useState } from "react";
import FormInregistrare from "./form/FormInregistrare";
import TipProfil from "./form/TipProfil";

export const Register = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [tipProfil, setTipProfil] = useState('');
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const registerUser = async (data) => {
    try {
      const response = await fetch("http://localhost:3001/api/inregistrare", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return { success: true };
    } catch (error) {
      return { success: false, error: "Internal Server Error" };
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const { nume, varsta, oras, email, parola } = event.target.elements;
    const data = {
      nume: nume.value,
      varsta: varsta.value,
      oras: oras.value,
      tip_utilizator: tipProfil,
      email: email.value,
      parola: parola.value,
    };
    
    const result = await registerUser(data);
      console.log(data)
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
