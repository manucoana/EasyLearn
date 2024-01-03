import React, { useState } from 'react';
import "./Header.css";
import MeniuIcon from "../../imagini/icons/MeniuIcon";
import NavLateral from '../nav/NavLateral';

const Header = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <header className="header-app">
      <MeniuIcon toggleMenu={toggleMenu} />
      <NavLateral isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
