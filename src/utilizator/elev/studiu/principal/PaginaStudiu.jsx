import React, { useState, useEffect } from "react";
import "./PaginaStudiu.css";
import ButoanePaginaStudiu from "./ButoanePaginaStudiu";
import NavigarePagina from "../../../../navigare/NavigarePagina";
import CitesteMaterial from "../material/CitesteMaterial";
import NavigareProfesor from "../../../../navigare/NavigareProfesor";
import { fetchLessons } from "../material/functii/functiiDescarcare";
import SelecteazaLectie from "../../../profesor/eleviimei/incarcare/SelecteazaLectie";
import PaginaEmpty from "./PaginaEmpty";
import SectiuneUpload from "../../../profesor/eleviimei/incarcare/SectiuneUpload";

const PaginaStudiu = ({ userData }) => {
  const [activePage, setActivePage] = useState("");
  const [profesorData, setProfesorData] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [downloadError, setDownloadError] = useState("");
  const [activeLesson, setActiveLesson] = useState(null);

  const [files, setFiles] = useState({});
  const [uploadErrors, setUploadErrors] = useState({});

  const handleSelectProfessor = (profesor) => {
    setProfesorData(profesor);
    fetchLessons(userData.nume, profesor.nume, activePage, setLessons, setDownloadError);
  };

  const onClick = (page) => {
    setActivePage(page);
    if (profesorData) {
      fetchLessons(userData.nume, profesorData.nume, page, setLessons, setDownloadError);
    }
  };

  return (
    <>
      <NavigareProfesor userData={userData} onProfessorSelect={handleSelectProfessor} />
      {!profesorData && <PaginaEmpty />}
      {profesorData && (
        <>
          <div className="studiu-items">
            <ButoanePaginaStudiu userData={userData} profesorData={profesorData} onClick={onClick} />
            <div className="elemente-studiu">
              <div className="panou-studiu">
                <NavigarePagina activePage={activePage} userData={userData} profesorData={profesorData} />
                {(activePage === "Teme" || activePage === "Teste") && activeLesson !== null && (
                  <SectiuneUpload
                    index={activeLesson - 1} 
                    activePage={activePage}
                    files={files}
                    setFiles={setFiles}
                    elevData={userData} 
                    numeProfesor={profesorData.nume} 
                    setUploadErrors={setUploadErrors}
                    uploadErrors={uploadErrors}
                    idElev={userData.id} 
                  />
                )}
                {(activePage === "Lectii" || activePage === "Teme" || activePage === "Teste") && (
                  <SelecteazaLectie buttons={lessons} activeLesson={activeLesson} setActiveLesson={setActiveLesson} activePage={activePage} />
                )}
                {activeLesson !== null && (activePage === "Lectii" || activePage === "Teme" || activePage === "Teste") && (
                  <CitesteMaterial userData={userData} profesorData={profesorData} numeElev={userData.nume} numeProfesor={profesorData.nume} activePage={activePage} lessonNumber={activeLesson} />
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PaginaStudiu;
