import { saveAs } from 'file-saver';

export async function fetchDocuments(numeElev, numeProfesor, activePage, lessonNumber, setDocuments, setDownloadError) {
  try {
    const response = await fetch(`http://localhost:3001/api/material-didactic/documents/${numeElev}/${numeProfesor}/${activePage}/${lessonNumber}/`);
    if (!response.ok) {
      throw new Error(`Eroare la obtinerea documentelor: ${response.statusText}`);
    }
    const result = await response.json();
    setDocuments(result.documents || []);
  } catch (error) {
    console.error(`Eroare la obtinerea documentelor: ${error.message}`);
    setDownloadError(`Eroare la obtinerea documentelor: ${error.message}`);
  }
}

export async function fetchLessons(numeElev, numeProfesor, activePage, setLessons, setDownloadError) {
  try {
    const response = await fetch(`http://localhost:3001/api/material-didactic/lessons/${numeElev}/${numeProfesor}/${activePage}`);
    if (!response.ok) {
      throw new Error(`Eroare la obtinerea lecțiilor: ${response.statusText}`);
    }
    const result = await response.json();
    setLessons(result.lessons || []);
  } catch (error) {
    console.error(`Eroare la obtinerea lecțiilor: ${error.message}`);
    setDownloadError(`Eroare la obtinerea lecțiilor: ${error.message}`);
  }
}

export async function handleDownload(numeElev, numeProfesor, activePage, lessonNumber, document, setDownloadError) {
  try {
    console.log(`Se solicita descarcarea documentului pentru ${numeElev}/${numeProfesor}/${activePage}/${lessonNumber}/${document.titlu}`);
    
    const response = await fetch(`http://localhost:3001/api/download/${numeElev}/${numeProfesor}/${activePage}/${lessonNumber}/${document.titlu}`);
    
    if (!response.ok) {
      const errorText = await response.text();
      setDownloadError(`Eroare la descarcarea documentului: ${response.status} ${response.statusText} - ${errorText}`);
      return;
    }

    const contentDisposition = response.headers.get('Content-Disposition');
    const filenameMatch = contentDisposition && contentDisposition.match(/filename="(.+?)"/);
    const filename = filenameMatch ? filenameMatch[1] : `${document.titlu}`;

    const blob = await response.blob();
    
    saveAs(blob, filename);
  } catch (error) {
    console.error(`Eroare la descarcarea documentului: ${error.message}`);
    setDownloadError(`Eroare la descarcarea documentului: ${error.message}`);
  }
}


export async function handleDownloadOrPreview(numeElev, numeProfesor, activePage, lessonNumber, document, setDownloadError, isPreview) {
  try {
    console.log(`Solicitare ${isPreview ? 'previzualizare' : 'descărcare'} document pentru ${numeElev}/${numeProfesor}/${activePage}/${lessonNumber}/${document.titlu}`);
    
    const response = await fetch(`http://localhost:3001/api/download/${numeElev}/${numeProfesor}/${activePage}/${lessonNumber}/${document.titlu}`);
    
    if (!response.ok) {
      const errorText = await response.text();
      setDownloadError(`Eroare la ${isPreview ? 'previzualizarea' : 'descărcarea'} documentului: ${response.status} ${response.statusText} - ${errorText}`);
      return;
    }

    const contentDisposition = response.headers.get('Content-Disposition');
    const filenameMatch = contentDisposition && contentDisposition.match(/filename="(.+?)"/);
    const filename = filenameMatch ? filenameMatch[1] : `${document.titlu}`;

    const blob = await response.blob();

    if (isPreview) {
      const contentType = response.headers.get('Content-Type');
      if (contentType) {
        if (contentType.startsWith('application/pdf') || contentType.startsWith('image/')) {
          const blobUrl = URL.createObjectURL(blob);
          window.open(blobUrl);
        } else {
          setDownloadError(`Nu se poate previzualiza acest tip de fișier: ${contentType}`);
        }
      }
    } else {
      saveAs(blob, filename); 
    }
  } catch (error) {
    console.error(`Eroare la ${isPreview ? 'previzualizarea' : 'descărcarea'} documentului: ${error.message}`);
    setDownloadError(`Eroare la ${isPreview ? 'previzualizarea' : 'descărcarea'} documentului: ${error.message}`);
  }
}
