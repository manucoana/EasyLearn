import React, { useState } from "react";

import LoginHandler from "../login/LoginHandler";
import Header from "./items/header/Header";
import Footer from "./items/footer/Footer";
import "./HomePage.css";

import InfoText from "./items/info/InfoText";

import { Register } from "../register/Register";
import InfoBoxContainer from "./items/info/InfoBoxContainer";
import Welcome from "./items/welcome/Welcome";
import IntrebariFrecvente from "./items/info/IntrebariFrecvente";

const Homepage = () => {
  const [showTestComponent, setShowTestComponent] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [showRegister, setShowRegister] = useState(false);

  const handleButtonClick = () => {
    setShowTestComponent(true);
    setShowHeader(false);
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowHeader(false);
  };

  return (
    <div className="homepage-container">
      {showHeader && !showTestComponent && !showRegister && <Header />}
      {showTestComponent ? (
        <LoginHandler />
      ) : showRegister ? (
        <Register setShowRegister={setShowRegister} />
      ) : (
        <main className="homepage-items">
          <Welcome
            setShowTestComponent={setShowTestComponent}
            setShowHeader={setShowHeader}
            setShowRegister={handleRegisterClick}
          />
          {showHeader && !showTestComponent && !showRegister && <InfoText />}
          {showHeader && !showTestComponent && !showRegister && (
            <InfoBoxContainer></InfoBoxContainer>
          )}
          {showHeader && !showTestComponent && !showRegister && (
            <IntrebariFrecvente />
          )}
        </main>
      )}
      {!showTestComponent && !showRegister && <Footer />}
    </div>
  );

};

export default Homepage;
