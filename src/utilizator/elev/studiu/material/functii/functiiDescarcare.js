import { saveAs } from 'file-saver';

export async function fetchDocuments(numeElev, activePage, setDocuments, setDownloadError) {
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

export async function handleDownload(numeElev, activePage, document, setDownloadError) {
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
        console.error(`Eroare la obtinerea documentelor: ${error.message}`);
    }
}