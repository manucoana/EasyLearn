import React, { useState } from "react";
import "./HomePage.css";
import { Register } from "../register/Register";
import InfoBoxContainer from "./items/info/InfoBoxContainer";
import Welcome from "./items/welcome/Welcome";
import IntrebariFrecvente from "./items/info/IntrebariFrecvente";
import LoginHandler from "../login/LoginHandler";
import DefaultLayout from "../layout/DefaultLayout";
import InfoText from "./items/info/InfoText";

const Homepage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  const renderMainContent = () => (
    <main className="homepage-items">
      <Welcome
        setShowLogin={setShowLogin}
        setShowRegister={handleRegisterClick}
      />
      <InfoBoxContainer />
      <InfoText />
      <IntrebariFrecvente />
    </main>
  );

  return (
    <DefaultLayout hideHeaderFooter={showLogin || showRegister}>
      {showLogin ? (
        <LoginHandler />
      ) : showRegister ? (
        <Register setShowRegister={setShowRegister} />
      ) : (
        renderMainContent()
      )}
    </DefaultLayout>
  );
};

export default Homepage;
