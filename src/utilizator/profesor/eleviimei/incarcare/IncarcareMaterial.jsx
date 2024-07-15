import React, { useState, useEffect } from "react";
import TextReutilizabil from "../../../../elemente/text/TextReutilizabil";
import "./IncarcareMaterial.css";
import ButoanePaginaStudiu from "../../../elev/studiu/principal/ButoanePaginaStudiu";
import NavigarePagina from "../../../../navigare/NavigarePagina";
import ButonReutilizabil from "../../../../elemente/butoane/ButonReutilizabil";
import CitesteMaterial from "../../../elev/studiu/material/CitesteMaterial";
import useFetchUserDataId from "../../../user-data/useFetchUserDataId";
import SectiuneUpload from "./SectiuneUpload";
import { fetchLessons } from "../../../elev/studiu/material/functii/functiiDescarcare";
import SelecteazaLectie from "./SelecteazaLectie";

const IncarcareMaterial = ({ email, idElev, numeProfesor, userData }) => {
  const [activePage, setActivePage] = useState("");
  const [buttons, setButtons] = useState([]);
  const [files, setFiles] = useState({});
  const [uploadErrors, setUploadErrors] = useState({});
  const { userDataID: elevData } = useFetchUserDataId(idElev);
  const [activeLesson, setActiveLesson] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [downloadError, setDownloadError] = useState("");

  const onClick = (page) => setActivePage(page);

  const handleAddButton = () => setButtons((prevButtons) => [...prevButtons, prevButtons.length + 1]);

  useEffect(() => {
    if (elevData && userData && activePage && activePage !== "medalii") {
      fetchLessons(elevData.nume, userData.nume, activePage, setLessons, setDownloadError);
    }
  }, [elevData, userData, activePage]);

  return (
    <div className="incarcare-material-items">
      <ButoanePaginaStudiu elevData={elevData} userData={userData} onClick={onClick} />
      <div className="panou-studiu">
        {activePage !== "Medalii" && activePage !== "Note" && (
          <div className="adaugare-incarca">
            <TextReutilizabil className="text-test" text={`Încarcă materiale pentru ${elevData?.nume}`} />
            {buttons.map((button, index) => (
              <SectiuneUpload key={index} index={index} activePage={activePage} files={files} setFiles={setFiles} elevData={elevData} numeProfesor={numeProfesor} setUploadErrors={setUploadErrors} uploadErrors={uploadErrors} idElev={idElev}/>
            ))}
            <ButonReutilizabil className="buton-adauga" onClick={handleAddButton} text="Adaugă un material" />
          </div>
        )}
        <NavigarePagina userData={userData} elevData={elevData} activePage={activePage} email={email} />
        {activePage !== "Medalii" && activePage !== "Note" && (
          <SelecteazaLectie buttons={lessons} activePage={activePage} setActiveLesson={setActiveLesson} />
        )}
        {activePage !== "Medalii" && activePage !== "Note" && (
          <CitesteMaterial
            userData={userData}
            elevData={elevData}
            numeElev={elevData?.nume}
            numeProfesor={numeProfesor}
            activePage={activePage}
            lessonNumber={activeLesson}
          />
        )}
      </div>
    </div>
  );
};

export default IncarcareMaterial;
