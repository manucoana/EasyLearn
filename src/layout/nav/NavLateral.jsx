import React from 'react';
import './NavLateral.css';

const NavLateral = ({ isOpen, toggleMenu }) => {
    return (
        <div className={`nav-lateral ${isOpen ? 'open' : ''}`}>
            <ul>
                <li><a href="cerere-colaborare">Deconectare</a></li>
            </ul>
            <div className="close" onClick={toggleMenu}>X</div>
        </div>
    );
};

export default NavLateral;
