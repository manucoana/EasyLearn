import React, { useState, useEffect } from 'react';
import "./Header.css";
import MeniuIcon from "../../imagini/icons/MeniuIcon";
import NavLateral from '../nav/NavLateral';
import TextReutilizabil from '../../text/TextReutilizabil';

const Header = ({ titlu }) => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.title = titlu;
  }, [titlu]);

  return (
    <header className="header-app">
      <div></div>
      <TextReutilizabil className="text-titlu-header" text={titlu} />
      <div className="menu-icon">
        <MeniuIcon className="menu-icon" toggleMenu={toggleMenu} />
      </div>
      <NavLateral isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
