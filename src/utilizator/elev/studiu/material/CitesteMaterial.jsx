import React, { useState, useEffect } from "react";
import "./CitesteMaterial.css";
import TextReutilizabil from "../../../../elemente/text/TextReutilizabil";
import ButonReutilizabil from "../../../../elemente/butoane/ButonReutilizabil";
import { fetchDocuments, handleDownloadOrPreview } from "./functii/functiiDescarcare";
import axios from "axios";

const CitesteMaterial = ({ userData, elevData, numeElev, numeProfesor, activePage, lessonNumber }) => {
  const [downloadError, setDownloadError] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [grade, setGrade] = useState('');
  const [gradeError, setGradeError] = useState(null);

  useEffect(() => {
    fetchDocuments(numeElev, numeProfesor, activePage, lessonNumber, setDocuments, setDownloadError);
  }, [numeElev, numeProfesor, activePage, lessonNumber]);

  const handleDownloadClick = (document) => {
    handleDownloadOrPreview(numeElev, numeProfesor, activePage, lessonNumber, document, setDownloadError, false);
  };

  const handlePreviewClick = (document) => {
    handleDownloadOrPreview(numeElev, numeProfesor, activePage, lessonNumber, document, setDownloadError, true);
  };

  const handleGradeSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/note', {
        id_elev: elevData.id,
        tip_evaluare: activePage,
        nota: grade,
        id_profesor: userData.id,
        lessonNumber: lessonNumber,
      });
      setGrade('');
      setGradeError(null);
    } catch (error) {
      setGradeError('Error submitting grade');
    }
  };

  return (
    <div className="container-material">
      <TextReutilizabil className="text-mic" text={`Documente disponibile pentru Lecția ${lessonNumber}:`} />
      <ul className="lista-documente">
        {documents.map((document) => (
          <li onClick={() => handlePreviewClick(document)} key={document.titlu} className="list-item">
            <TextReutilizabil className="text-mic" text={document.titlu} />
            <div className="butoane-document">
              <ButonReutilizabil className="buton-transparent" onClick={() => handleDownloadClick(document)} text="Descarcă" />
            </div>
          </li>
        ))}
      </ul>
    
      {userData.tip_utilizator === 'Profesor' && ( 
        (activePage === "Teme" || activePage === "Teste") && (
          <form onSubmit={handleGradeSubmit}>
            <input
              type="text"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              placeholder="Nota"
            />
            <button type="submit">Submit Nota</button>
          </form>
        )
      )}
      {gradeError && <p style={{ color: "red" }}>{gradeError}</p>}
    </div>
  );
};

export default CitesteMaterial;
