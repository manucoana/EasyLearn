import React from "react";

import "./FormLogin.css";

import CampInput from "../../input/CampInput";
import LogoComponent from "../../imagini/logo/LogoComponent";
import ButonAutentificare from "../../butoane/ButonAutentificare";


const FormLogin = ({ handleLogin, renderError, setShowRegister }) => (
    <form className="form-login" onSubmit={handleLogin}>
        <LogoComponent />
        <CampInput type="email" placeholder="E-mail" name="email" id="email" />
        {renderError("email")}
        <CampInput type="password" placeholder="Parola" name="parola" id="parola" />
        {renderError("parola")}
        <ButonAutentificare color="#141B76" text="Log In" />
        <ButonAutentificare onClick={() => setShowRegister(true)} color="#16165b" text="Înregistrare" />
    </form>
)

export default FormLogin;