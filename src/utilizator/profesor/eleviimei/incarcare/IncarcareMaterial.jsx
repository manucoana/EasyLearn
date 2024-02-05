import React, { useState } from "react";
import TextReutilizabil from "../../../../elemente/text/TextReutilizabil";
import "./IncarcareMaterial.css";
import ButoanePaginaStudiu from "../../../elev/studiu/principal/ButoanePaginaStudiu";
import NavigarePagina from "../../../../navigare/NavigarePagina";
import ButonReutilizabil from "../../../../elemente/butoane/ButonReutilizabil";
import CitesteMaterial from "../../../elev/studiu/material/CitesteMaterial";

const IncarcareMaterial = ({ email, numeElev, numeProfesor }) => {
  const [activePage, setActivePage] = useState("");
  const [material, setMaterial] = useState(null);
  const [uploadError, setUploadError] = useState(null);
  const [materialTitle, setMaterialTitle] = useState("");

  const onClick = (page) => {
    setActivePage(page);
  };

  const handleFileChange = (event) => {
    setMaterial(event.target.files[0]);
    setMaterialTitle(event.target.files[0].name);
  };

  const handleUpload = async () => {
    setUploadError(null);

    if (material) {

      const formData = new FormData();
      formData.append("file", material);
      formData.append("nume_elev", numeElev);
      formData.append("active_page", activePage);

      try {
        const response = await fetch("http://localhost:3001/api/incarcare-media/uploads", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          setUploadError(`Eroare la incarcarea materialului: ${response.statusText}`);
          return;
        }

        const result = await response.json();
        const cale = result.imageUrl;

        const data = {
          nume_profesor: numeProfesor,
          nume_elev: numeElev,
          tip_material: activePage,
          cale: cale,
          titlu: materialTitle,
        };

        const insertDateMaterial = await fetch("http://localhost:3001/api/material-didactic/insertMaterial", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!insertDateMaterial.ok) {
          setUploadError(`Eroare la inserarea datelor: ${insertDateMaterial.statusText}`);
        } else {
          console.log(cale)
          console.log("Materialul si datele au fost incarcate cu succes!");
        }
      } catch (error) {
        setUploadError(`Eroare la incarcarea materialului: ${error.message}`);
      }
    } else {
      console.warn("Nu a fost selectat niciun fisier pentru incarcare.");
    }
  };

  return (
    <div className="incarcare-material-items">
      <ButoanePaginaStudiu onClick={onClick} />
      <div className="panou-studiu">
        <TextReutilizabil className="text-test" text={`Încarcă materiale pentru ${numeElev}`} />
        <input type="file" onChange={handleFileChange} />
        <ButonReutilizabil className="buton-descarca" onClick={handleUpload} text={`Încarcă`} />
        {uploadError && <p style={{ color: "red" }}>{uploadError}</p>}
        <NavigarePagina activePage={activePage} email={email} />
        <CitesteMaterial numeElev={numeElev} activePage={activePage} />
      </div>
    </div>
  );
};

export default IncarcareMaterial;
