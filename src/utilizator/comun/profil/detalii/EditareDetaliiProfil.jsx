import React from "react";
import TextReutilizabil from "../../../../elemente/text/TextReutilizabil";
import "./EditareDetaliiProfil.css";


const EditareDetaliiProfil = ({ userData, onInputChange }) => {
    return (
        <div className="editor-profil">
            <label>
                <TextReutilizabil className="text-mic" text="Varsta" />
                <input
                    type="text"
                    name="varsta"
                    value={userData.varsta}
                    onChange={onInputChange}
                />
            </label>

            <label>
                <TextReutilizabil className="text-mic" text="Oras" />
                <input
                    type="text"
                    name="oras"
                    value={userData.oras}
                    onChange={onInputChange}
                />
            </label>

            <label>
                <TextReutilizabil className="text-mic" text="Tip Utilizator" />
                <input
                    type="text"
                    name="tip_utilizator"
                    value={userData.tip_utilizator}
                    onChange={onInputChange}
                />
            </label>

            <label>
                <TextReutilizabil className="text-mic" text="Email" />
                <input
                    type="text"
                    name="email"
                    value={userData.email}
                    onChange={onInputChange}
                />
            </label>
        </div>
    );
};

export default EditareDetaliiProfil;
