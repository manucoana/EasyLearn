import React, { useState, useEffect } from 'react';
import "./Header.css";
import MeniuIcon from "../../imagini/icons/MeniuIcon";
import NavLateral from '../nav/NavLateral';
import TextReutilizabil from '../../elemente/text/TextReutilizabil';
import IconNotificari from '../../imagini/icons/IconNotificari';
import SolicitareColaborare from '../../utilizator/profesor/eleviimei/solicitari/SolicitareColaborare';
import useFetchUserData from '../../utilizator/user-data/useFetchUserData';

const Header = ({ titlu, email }) => {
  const [isNotificareOpen, setIsNotificareOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { userData } = useFetchUserData(email);

  console.log(userData.tip_utilizator)
  
  const deschideNotificare = () => {
    setIsNotificareOpen(!isNotificareOpen);
  }

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.title = titlu;
  }, [titlu]);

  return (
    <div>
      <header className="header-app">
        <div></div>
        <TextReutilizabil className="text-titlu-header" text={titlu || "EASYLEARN"} />
        <div className="menu-icon">
        {userData.tip_utilizator === 'Profesor' && (
            <IconNotificari
              deschideNotificare={deschideNotificare}
              isNotificareOpen={isNotificareOpen}
            />
          )}
          <MeniuIcon className="menu-icon" toggleMenu={toggleMenu} />
        </div>
        <NavLateral isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        {isNotificareOpen && (
          <SolicitareColaborare
            isOpen={isNotificareOpen}
            deschideNotificare={deschideNotificare}
            email={userData.email}
          />
        )}
      </header>
    </div>
  );
};

export default Header;
