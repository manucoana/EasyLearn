export const handleUpload = async (index, files, activePage, elevData, numeProfesor, setUploadErrors, idElev) => {
    setUploadErrors((prevErrors) => ({
      ...prevErrors,
      [index]: null,
    }));
  
    const material = files[index];
    if (!material) {
      console.warn("Nu a fost selectat niciun fisier pentru incarcare.");
      return;
    }
    const lessonNumber = index + 1;
  
    const formData = new FormData();
    formData.append("file", material);
    formData.append("nume_elev", elevData.nume);
    formData.append("nume_profesor", numeProfesor || "");
    formData.append("active_page", activePage);
    formData.append("lesson_number", lessonNumber);
  
    try {
      const response = await fetch("http://localhost:3001/api/incarcare-media/server_uploads", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`Eroare la incarcarea materialului: ${response.statusText}`);
      }
  
      const result = await response.json();
      const docUrl = result.docUrl;
      console.log(docUrl);
  
      const data = {
        nume_profesor: numeProfesor || "",
        nume_elev: elevData.nume,
        tip_material: activePage,
        cale: docUrl,
        titlu: material.name,
        lesson_number: lessonNumber,
        id_elev: idElev,
      };
  
      const insertDateMaterial = await fetch("http://localhost:3001/api/material-didactic/insertMaterial", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!insertDateMaterial.ok) {
        throw new Error(`Eroare la inserarea datelor: ${insertDateMaterial.statusText}`);
      }
  
      console.log("Materialul si datele au fost incarcate cu succes!");
    } catch (error) {
      console.error("Eroare la incarcarea materialului:", error);
      setUploadErrors((prevErrors) => ({
        ...prevErrors,
        [index]: "Eroare la incarcarea materialului, va rugam sa incercati din nou.",
      }));
    }
  };
  