import React from "react";
import "./ButoanePaginaStudiu.css"
import {
    LECTII,
    TEME,
    TESTE
} from "../../../../elemente/constante/TitluConstant";
import ButonReutilizabil from "../../../../elemente/butoane/ButonReutilizabil";
import ImagineProfil from "../../../comun/profil/imagine/ImagineProfil";
import TextReutilizabil from "../../../../elemente/text/TextReutilizabil";

const ButoanePaginaStudiu = ({ onClick, profesorData, userData, elevData }) => {

    const lectii = LECTII;
    const teme = TEME;
    const teste = TESTE;

    return (
        <div className="butoane-pagina-studiu-items">
            {userData.tip_utilizator === "Elev" &&
                <div className="detalii-profesor">
                    <ImagineProfil userData={profesorData} />
                    <p>Profesorul meu este:</p>
                    <p1>{profesorData?.nume}</p1>
                </div>
            }
            {userData.tip_utilizator === "Profesor" &&
                <>
                    <ImagineProfil userData={elevData} />
                    <TextReutilizabil className="text-normal" text={`Încarcă materiale pentru ${elevData.nume}`} />
                </>
            }
            <div className="butoane-pagina-studiu">
                <ButonReutilizabil className="buton-studiu" onClick={() => onClick("Lectii")} text={lectii} />
                <ButonReutilizabil className="buton-studiu" onClick={() => onClick("Teme")} text={teme} />
                <ButonReutilizabil className="buton-studiu" onClick={() => onClick("Teste")} text={teste} />
                <ButonReutilizabil className="buton-studiu" onClick={() => onClick("Note")} text="Note" />
                <ButonReutilizabil className="buton-studiu" onClick={() => onClick("Premii")} text="Premii" />
            </div>
        </div>
    );
};

export default ButoanePaginaStudiu;
