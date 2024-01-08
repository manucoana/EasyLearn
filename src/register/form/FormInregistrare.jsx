import React from "react";
import CampInput from "../../input/CampInput";
import "./FormInregistrare.css"
import ButonAutentificare from "../../butoane/ButonAutentificare";
import TextReutilizabil from "../../text/TextReutilizabil";
import { INREGISTRARE } from "../../constante/ButonConstant";
import {SUBTITLU_INREGISTRARE} from "../../constante/TitluConstant"

const FormInregistrare = ({ handleRegister, renderError, errorMessages }) => {

    const inregistrare = INREGISTRARE;
    const subtitluInregistrare = SUBTITLU_INREGISTRARE;
    
    return (
        <div className="form-inregistrare-items">
            <form className="form-inregistrare" onSubmit={handleRegister}>
                <div className="inregistrare-titlu">
                    <TextReutilizabil className="text-reutilizabil-3" text={inregistrare} />
                    <TextReutilizabil className="text-reutilizabil-4" text={subtitluInregistrare} />
                </div>
                <CampInput
                    label="Nume"
                    type="text"
                    placeholder="Nume"
                    name="nume"
                    id="nume"
                    required
                />
                <CampInput
                    label="Varsta"
                    type="number"
                    placeholder="Varsta"
                    name="varsta"
                    id="varsta"
                    required
                />
                <CampInput
                    label="Oras"
                    type="text"
                    placeholder="Oras"
                    name="oras"
                    id="oras"
                    required
                />
                <CampInput
                    label="E-mail"
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    id="email"
                    required
                />
                {renderError(errorMessages.message)}
                <CampInput
                    label="Parola"
                    placeholder="Parola"
                    name="parola"
                    id="parola"
                    required
                />
                {renderError(errorMessages.message)}
                <ButonAutentificare type="submit" className="buton-autentificare-inregistrare" text={inregistrare} />
            </form>
        </div>
    );
};

export default FormInregistrare;