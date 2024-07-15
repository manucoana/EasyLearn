import React from "react";
import "./NavPrincipal.css";
import ButoaneNavigare from "../../navigare/ButoaneNavigare";
import ButonReutilizabil from "../../elemente/butoane/ButonReutilizabil";

const NavPrincipal = ({ userData, onClick, goBack, profesorData }) => {
    return (
        <nav className='nav-principal'>
            <ButoaneNavigare onClick={onClick} userData={userData} profesorData={profesorData}  />
            <ButonReutilizabil className="buton-nav-principal" onClick={goBack} text="Inapoi" />
        </nav>
    );
};

export default NavPrincipal;