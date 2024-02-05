import React, { useState, useEffect } from 'react';
import "./Header.css";
import MeniuIcon from "../../imagini/icons/MeniuIcon";
import NavLateral from '../nav/NavLateral';
import TextReutilizabil from '../../elemente/text/TextReutilizabil';
import IconNotificari from '../../imagini/icons/IconNotificari';
import SolicitareColaborare from '../../utilizator/profesor/eleviimei/solicitari/SolicitareColaborare';

const Header = ({ titlu, userData }) => {
  const [isNotificareOpen, setIsNotificareOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const deschideNotificare = () => {
    setIsNotificareOpen(!isNotificareOpen);
  };

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
          {userData?.tip_utilizator === 'Profesor' && (
            <IconNotificari deschideNotificare={deschideNotificare} isNotificareOpen={isNotificareOpen} />
          )}
          <MeniuIcon className="menu-icon" toggleMenu={toggleMenu} />
        </div>
        <NavLateral isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        {isNotificareOpen && (
          <SolicitareColaborare isOpen={isNotificareOpen} deschideNotificare={deschideNotificare} userData={userData} />
        )}
      </header>
    </div>
  );
};

export default Header;