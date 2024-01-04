import React from "react";

import CampInput from "../../input/CampInput";
import "./FormInregistrare.css"
import ButonAutentificare from "../../butoane/ButonAutentificare";
import TextReutilizabil from "../../text/TextReutilizabil";

const FormInregistrare = ({ handleRegister, renderError, errorMessages }) => (
    <div className="form-inregistrare-items">
        <form className="form-inregistrare" onSubmit={handleRegister}>
            <div className="inregistrare-text">
                <TextReutilizabil text="Inregistrare" fontSize="1.5em" />
                <TextReutilizabil text="Completati campurile cu datele dumneavoastra" fontSize="0.93em" />
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
            <ButonAutentificare type="submit" color="#16165b" text="Înregistrare" />
        </form>
    </div>
);

export default FormInregistrare;