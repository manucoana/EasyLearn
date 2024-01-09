import React, { useState, useEffect } from "react";
import "./Student.css";
import Titlu from "../text/Titlu";
import DefaultLayout from "../layout/DefaultLayout";
import Sfera from "../layout/decor/Sfera";
import ButoaneNavigareElev from "../piese/elev/ButoaneNavigareElev";
import NavigarePagina from "../piese/NavigarePagina";

const Student = ({ email }) => {
  const [activePage, setActivePage] = useState("");

  const handleButtonClick = (page) => {
    setActivePage(page);
    window.history.pushState({ page: page }, page, `${page.toLowerCase()}`);
  };

  useEffect(() => {
    const gestioneazaNavigare = (event) => {
      setActivePage(event.state?.page || "");
    };

    window.addEventListener("popstate", gestioneazaNavigare);

    return () => {
      window.removeEventListener("popstate", gestioneazaNavigare);
    };
  }, []);

  return (
    <DefaultLayout>
      {activePage ? (
        <NavigarePagina activePage={activePage} email={email} />
      ) : (
        <div className="student-items">
          <div className="panou-student">
            <Titlu />
            <ButoaneNavigareElev handleButtonClick={handleButtonClick} />
          </div>
          <Sfera/>
        </div>
      )}
    </DefaultLayout>
  );
};

export default Student;
