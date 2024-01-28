import React from "react";
import "./FormLogin.css";
import CampInput from "../../elemente/input/CampInput";
import LogoComponent from "../../imagini/logo/LogoComponent";
import { LOG_IN, INREGISTRARE } from "../../elemente/constante/ButonConstant";
import ButonReutilizabil from "../../elemente/butoane/ButonReutilizabil";


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
                <ButonReutilizabil className="buton-login" text={logIn} />
                <ButonReutilizabil className="buton-inregistrare" onClick={() => setShowRegister(true)} text={inregistrare} />
            </div>
        </form>
    );
};

export default FormLogin;