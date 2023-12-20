import React from "react";
import "./ButonLogin.css";

const ButonLogin = ({ onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className="buton-login" onClick={handleClick}>
      Log In
    </button>
  );
};

export default ButonLogin;