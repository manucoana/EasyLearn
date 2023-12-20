import React from "react";

import ButonInregistrare from "../../../login/form/butoane/inregistrare/ButonInregistrare";
import CampInput from "../../../input/CampInput";

import "./FormInregistrare.css"

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
            label="Descriere"
            type="text"
            placeholder="Descriere"
            name="descriere"
            id="descriere"
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
        <ButonInregistrare type="submit"></ButonInregistrare>
    </form>
);

export default FormInregistrare;