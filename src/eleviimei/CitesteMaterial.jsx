import React, { useState, useEffect } from "react";
import "./CitesteMaterial.css"
import { saveAs } from 'file-saver';
import TextReutilizabil from "../text/TextReutilizabil";
import ButonReutilizabil from "../butoane/ButonReutilizabil";

const CitesteMaterial = ({ numeElev, activePage }) => {

    const [downloadError, setDownloadError] = useState(null);
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        async function fetchDocuments() {
            try {
                const response = await fetch(`http://localhost:3001/api/material-didactic/documents/${numeElev}/${activePage}`);
                if (!response.ok) {
                    throw new Error(`Eroare la obtinerea documentelor: ${response.statusText}`);
                }
                const result = await response.json();
                setDocuments(result.documents || []);
            } catch (error) {
                console.error(`Eroare la obtinerea documentelor: ${error.message}`);
            }
        }

        fetchDocuments();
    }, [numeElev, activePage]);

    const handleDownload = async (document) => {
        try {
            console.log(`Se solicita descarcarea documentului pentru ${numeElev}/${activePage}/${document.titlu}`);
            const response = await fetch(`http://localhost:3001/api/material-didactic/download/${numeElev}/${activePage}/${document.titlu}`);

            if (!response.ok) {
                setDownloadError(`Eroare la descarcarea documentului: ${response.statusText}`);
                return;
            }

            const contentDisposition = response.headers.get('Content-Disposition');
            const filenameMatch = contentDisposition && contentDisposition.match(/filename="(.+?)"/);
            const filename = filenameMatch ? filenameMatch[1] : 'download';

            const blob = await response.blob();

            saveAs(blob, filename);
        } catch (error) {
            setDownloadError(`Eroare la descarcarea documentului: ${error.message}`);
        }
    };


    return (
        <div className="container">
          {/*   <TextReutilizabil className="text-normal" text="Documente disponibile:" /> */}
            <ul className="lista-documente">
                {documents.map((document) => (
                    <li key={document.titlu} className="list-item">
                        <TextReutilizabil className="text-mic" text={document.titlu}  />
                        <ButonReutilizabil className="buton-descarca" onClick={() => handleDownload(document)} text="Descarcă" />
                    </li>
                ))}
            </ul>
            {downloadError && <p className="error-message">{downloadError}</p>}
        </div>
    );

};

export default CitesteMaterial;