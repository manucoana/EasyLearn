import React from "react";
import "./NavPrincipal.css";
import ButoaneNavigare from "../../navigare/ButoaneNavigare";

const NavPrincipal = ({ userData, onClick }) => {
    return (
        <nav className='nav-principal'>
            <ButoaneNavigare onClick={onClick} userData={userData} />
        </nav>
    );
};

export default NavPrincipal;