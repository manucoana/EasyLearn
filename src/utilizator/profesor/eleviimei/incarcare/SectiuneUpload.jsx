import React from "react";
import ButonReutilizabil from "../../../../elemente/butoane/ButonReutilizabil";
import { handleUpload } from "./handleUploadMaterial";

const SectiuneUpload = ({ index, activePage, files, setFiles, elevData, numeProfesor, setUploadErrors, uploadErrors, idElev }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFiles((prevFiles) => ({
        ...prevFiles,
        [index]: file,
      }));
    }
  };

  return (
    <div className="upload-section">
      <label>{`${activePage} ${index + 1}`}</label>
      <input type="file" onChange={handleFileChange} />
      <ButonReutilizabil
        className="buton-descarca"
        onClick={() => handleUpload(index, files, activePage, elevData, numeProfesor, setUploadErrors, idElev)}
        text="Încarcă"
      />
      {uploadErrors[index] && <p style={{ color: "red" }}>{uploadErrors[index]}</p>}
    </div>
  );
};

export default SectiuneUpload;
