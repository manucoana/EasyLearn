import React from "react";
import ButonLogin from "./login/ButonLogin";
import ButonInregistrare from "./inregistrare/ButonInregistrare";
import "./ButoaneLoginContainer.css";

const ButoaneLoginContainer = ({ onLoginClick, onInregistrareClick }) => {
  return (
    <div className="butoane-login-container">
      <ButonLogin onClick={onLoginClick} />
      <ButonInregistrare onClick={onInregistrareClick} />
    </div>
  );
};

export default ButoaneLoginContainer;