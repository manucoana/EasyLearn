import React from "react";
import "./CampInput.css"

const CampInput = ({ type, placeholder, name, id, required }) => (
    <>
        <label className="label-login" htmlFor={id}>{placeholder}</label>
        <input className="input-login"
            type={type}
            placeholder={placeholder}
            name={name}
            id={id}
            required={required} />
    </>
);

export default CampInput;