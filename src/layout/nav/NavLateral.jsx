import React from 'react';
import './NavLateral.css';

const NavLateral = ({ isOpen, toggleMenu }) => {
    return (
        <div className={`nav-lateral ${isOpen ? 'open' : ''}`}>
            <ul>
                <li><a href="despre">Despre platforma</a></li>
                <li><a href="intrebari">Intrebari frecvente</a></li>
                <li><a href="taxe">Taxe</a></li>
                <li><a href="cerere-colaborare">Cereri de colaborare</a></li>
            </ul>
            <div className="close" onClick={toggleMenu}>X</div>
        </div>
    );
};

export default NavLateral;
