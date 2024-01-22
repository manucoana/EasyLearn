import React, { useState } from "react";
import TextReutilizabil from "../text/TextReutilizabil";
import "./IncarcareMaterial.css";
import ButoanePaginaStudiu from "../studiu/principal/ButoanePaginaStudiu";
import NavigarePagina from "../navigare/NavigarePagina";
import ButonReutilizabil from "../butoane/ButonReutilizabil";

const IncarcareMaterial = ({ email, numeElev, numeProfesor }) => {
  const [activePage, setActivePage] = useState("");
  const [material, setMaterial] = useState(null);
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
  
      const formData = new FormData();
      formData.append("file", material);
      formData.append("nume_elev", numeElev);
      formData.append("active_page", activePage);
  
      try {
        const response = await fetch("http://localhost:3001/api/material-didactic/uploads", {
          method: "POST",
          body: formData,
        });
  
        if (!response.ok) {
          setUploadError(`Eroare la incarcarea materialului: ${response.statusText}`);
          setLoading(false);
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
      } finally {
        setLoading(false);
      }
    } else {
      console.warn("Nu a fost selectat niciun fisier pentru incarcare.");
    }
  };
  
  return (
    <div className="incarcare-material-items">
      <TextReutilizabil className="text-normal" text={`Încarcă materiale pentru ${numeElev}`} />
      <input type="file" onChange={handleFileChange} />
      <ButonReutilizabil
        className="buton-publicare"
        onClick={handleUpload}
        text={`Încarcă materiale pentru ${numeElev}`}
      />

      {loading && <p>Se încarcă...</p>}
      {uploadError && <p style={{ color: "red" }}>{uploadError}</p>}

      <div className="butoane-incarcare-material">
        <ButoanePaginaStudiu className="butoane-incarcare-material" onClick={onClick} />
        <NavigarePagina activePage={activePage} email={email} />
      </div>
    </div>
  );
};

export default IncarcareMaterial;
