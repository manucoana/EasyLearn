import React from "react";

import CampInput from "../../input/CampInput";
import "./FormInregistrare.css"
import ButonAutentificare from "../../butoane/ButonAutentificare";

const FormInregistrare = ({ handleRegister, renderError, errorMessages }) => (
    <form className="form-inregistrare" onSubmit={handleRegister}>
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
        <ButonAutentificare type="submit" color="#16165b" text="Înregistrare"/>
    </form>
);

export default FormInregistrare;