import React from "react";
import CampInput from "../../elemente/input/CampInput";
import "./FormInregistrare.css"
import TextReutilizabil from "../../elemente/text/TextReutilizabil";
import { INREGISTRARE } from "../../elemente/constante/ButonConstant";
import { SUBTITLU_INREGISTRARE } from "../../elemente/constante/TitluConstant"
import ButonReutilizabil from "../../elemente/butoane/ButonReutilizabil";

const FormInregistrare = ({ handleRegister, renderError, errorMessages }) => {

    const inregistrare = INREGISTRARE;
    const subtitluInregistrare = SUBTITLU_INREGISTRARE;

    return (
        <div className="form-inregistrare-items">
            <form className="form-inregistrare" onSubmit={handleRegister}>
                <div className="inregistrare-titlu">
                    <TextReutilizabil className="text-subtitlu-albastru" text={inregistrare} />
                    <TextReutilizabil className="text-normal" text={subtitluInregistrare} />
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
                <div className="buton-aut">
                    <ButonReutilizabil type="submit" className="buton-inregistrare" text={inregistrare} />
                </div>
            </form >
        </div >
    );
};

export default FormInregistrare;