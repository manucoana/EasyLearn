import React, { useState, useEffect } from "react";
import "./PaginaStudiu.css";
import IconLectii from "../../imagini/icons/IconLectii";
import IconTeme from "../../imagini/icons/IconTeme";
import IconTeste from "../../imagini/icons/IconTeste";
import TextReutilizabil from "../../text/TextReutilizabil";
import Lectii from "./lectii/Lectii";
import Teme from "./teme/Teme";
import Teste from "./teste/Teste";
import InfoBox from "../../box/InfoBox";
import LogoComponent from "../../imagini/logo/LogoComponent";

const PaginaStudiu = ({ email, onClick }) => {
    const [activePage, setActivePage] = useState("");

    const handleButtonClick = (page) => {
        setActivePage(page);
        window.history.pushState({ page: page }, page, `/student/paginastudiu/${page.toLowerCase()}`);
    };

    const handleClose = () => {
        setActivePage("");
        window.history.pushState({}, "", "/student/paginastudiu");
    };

    useEffect(() => {
        const handlePopState = (event) => {
            if (event.state && event.state.page) {
                setActivePage(event.state.page);
            } else {
                setActivePage("");
            }
        };

        window.addEventListener("popstate", handlePopState);

        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, []);

    const renderContent = () => {
        switch (activePage) {
            case "Lectii":
                return <Lectii email={email} handleLectiiClose={handleClose} />;
            case "Teme":
                return <Teme email={email} handleLectiiClose={handleClose} />;
            case "Teste":
                return <Teste email={email} handleLectiiClose={handleClose} />;
            default:
                return (
                    <div className="logo-items">
                        <LogoComponent/>
                    <div className="pagina-studiu-items">
                        <div className="lectii-teme-teste">
                            <InfoBox onClick={() => handleButtonClick("Lectii")} className="info-box-1">
                                <div>
                                    <TextReutilizabil className="lectii" text="Lectii" fontSize="2em" color="#f2f3f4" />
                                    <IconLectii />
                                </div>
                            </InfoBox>

                            <InfoBox onClick={() => handleButtonClick("Teme")} className="info-box-1">
                                <div>
                                    <TextReutilizabil className="teme" text="Teme" fontSize="2em" color="#f2f3f4" />
                                    <IconTeme />
                                </div>
                            </InfoBox>

                            <InfoBox onClick={() => handleButtonClick("Teste")} className="info-box-1">
                                <div>
                                    <TextReutilizabil className="teste" text="Teste" fontSize="2em" color="#f2f3f4" />
                                    <IconTeste />
                                </div>
                            </InfoBox>
                        </div>
                        
                    </div>
                    </div>
                );
        }
    };
    return (
        <div>
            {renderContent()}
        </div>
    );
};

export default PaginaStudiu;
