import React, { useState, useEffect } from 'react';
import "./Header.css";
import MeniuIcon from "../../imagini/icons/MeniuIcon";
import NavLateral from '../nav/NavLateral';
import TextReutilizabil from '../../elemente/text/TextReutilizabil';
import Notificare from '../notificare/Notificare';
import NavPrincipal from '../nav/NavPrincipal';
import LogoComponent from '../../imagini/logo/LogoComponent';

const Header = ({ titlu, userData, profesorData, onClick, goBack }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.title = titlu;
  }, [titlu]);

  return (
    <header className="header-items">
      <div onClick={() => onClick("PanouUtilizator")} className="header-titlu">
        <LogoComponent className="imagine-student-mica" />
        <TextReutilizabil className="text-titlu-header" text={titlu || "EasyLearn"} />
      </div>
      <div className="menu-icon">
        {userData && <NavPrincipal profesorData={profesorData} onClick={onClick} goBack={goBack} userData={userData} />}
        <Notificare userData={userData} />
        <MeniuIcon className="menu-icon" toggleMenu={toggleMenu} />
      </div>
      <NavLateral isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;