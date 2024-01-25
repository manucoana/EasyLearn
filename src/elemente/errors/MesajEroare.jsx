import React from "react";

const MesajEroare = ({ message }) => {
    return message ? <div className="error">{message}</div> : null;
};

export default MesajEroare;
