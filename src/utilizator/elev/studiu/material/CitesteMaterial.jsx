import React, { useState, useEffect } from "react";
import "./CitesteMaterial.css"
import TextReutilizabil from "../../../../elemente/text/TextReutilizabil";
import ButonReutilizabil from "../../../../elemente/butoane/ButonReutilizabil";
import { fetchDocuments, handleDownload } from "./functii/functiiDescarcare";

const CitesteMaterial = ({ numeElev, activePage }) => {
    const [downloadError, setDownloadError] = useState(null);
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        fetchDocuments(numeElev, activePage, setDocuments, setDownloadError);
    }, [numeElev, activePage]);

    const handleDownloadClick = (document) => {
        handleDownload(numeElev, activePage, document, setDownloadError);
    };

    return (
        <div className="container">
            <TextReutilizabil className="text-mic" text="Documente disponibile:" />
            <ul className="lista-documente">
                {documents.map((document) => (
                    <li key={document.titlu} className="list-item">
                        <TextReutilizabil className="text-mic" text={document.titlu} />
                        <ButonReutilizabil className="buton-descarca" onClick={() => handleDownloadClick(document)} text="Descarcă" />
                    </li>
                ))}
            </ul>
            {downloadError}
        </div>
    );
};

export default CitesteMaterial;