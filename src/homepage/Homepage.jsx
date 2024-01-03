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
  const [showLoginComponent, setShowLoginComponent] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClick = () => {
    setShowLoginComponent(true);
    setShowHeader(false);
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowHeader(false);
  };

  const renderMainContent = () => (
    <main className="homepage-items">
      <Welcome
        setShowLoginComponent={setShowLoginComponent}
        setShowHeader={setShowHeader}
        setShowRegister={handleRegisterClick}
      />
      <InfoBoxContainer />
      <InfoText />
      <IntrebariFrecvente />
    </main>
  );

  return (
    <DefaultLayout hideHeaderFooter={showLoginComponent || showRegister}>
      {showLoginComponent ? (
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