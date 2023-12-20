import React, { useState, useEffect } from "react";

import { Profil } from "../profil/Profil";
import "./Student.css"
import ButoaneStudent from "./butoane/ButoaneStudent";
import Header from "../homepage/items/header/Header";
import Footer from "../homepage/items/footer/Footer";

export const Student = ({ email }) => {
  const [showProfil, setShowProfil] = useState(false);

  const handleProfilButtonClick = () => {
    setShowProfil(true);
    window.history.pushState({ page: "Profil" }, "Profil", "/profil");
  };

  const handleProfilClose = () => {
    setShowProfil(false);
    window.history.back();
  };

  useEffect(() => {
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const handlePopState = (event) => {
    if (event.state && event.state.page === "Profil") {
      setShowProfil(true);
    } else {
      setShowProfil(false);
    }
  };

  return (
    <>
    <div>
    <Header/>
    <nav className="nav-student"></nav>
      {showProfil && <Profil email={email} handleProfilClose={handleProfilClose} />}
      {!showProfil && (
        <div className="student-items">
          <div className="sfer">
            <ButoaneStudent onClick={handleProfilButtonClick}></ButoaneStudent>
            
            </div>
        </div>
      )}
      
      </div>
    </>
  );
};

export default Student;
