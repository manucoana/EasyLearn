import React from "react";

import "./FormLogin.css";

import ButonLogin from "../butoane/login/ButonLogin";
import ButonInregistrare from "../butoane/inregistrare/ButonInregistrare";
import CampInput from "../../../input/CampInput";

import LogoComponent from "../../../imagini/LogoComponent";

const FormLogin = ({ handleLogin, renderError, setShowRegister }) => (
    <form className="form-login" onSubmit={handleLogin}>
        <LogoComponent></LogoComponent>
        <CampInput type="email" placeholder="E-mail" name="email" id="email"></CampInput>
        {renderError("email")}
        <CampInput type="password" placeholder="Parola" name="parola" id="parola"></CampInput>
        {renderError("parola")}
        <ButonLogin></ButonLogin>
        <ButonInregistrare onClick={() => setShowRegister(true)}></ButonInregistrare>
    </form>
)

export default FormLogin;