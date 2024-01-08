import React from "react";
import "./FormLogin.css";
import CampInput from "../../input/CampInput";
import LogoComponent from "../../imagini/logo/LogoComponent";
import ButonAutentificare from "../../butoane/ButonAutentificare";
import { LOG_IN, INREGISTRARE } from "../../constante/ButonConstant";


const FormLogin = ({ handleLogin, renderError, setShowRegister }) => {

    const logIn = LOG_IN;
    const inregistrare = INREGISTRARE;

    return (
        <form className="form-login-items" onSubmit={handleLogin}>
            <LogoComponent />
            <CampInput type="email" placeholder="E-mail" name="email" id="email" />
            {renderError("email")}
            <CampInput type="password" placeholder="Parola" name="parola" id="parola" />
            {renderError("parola")}
            <div className="butoane-login">
            <ButonAutentificare className="buton-autentificare-login" text={logIn} />
            <ButonAutentificare className="buton-autentificare-inregistrare" onClick={() => setShowRegister(true)} text={inregistrare} />
            </div>
        </form>
    );
};

export default FormLogin;