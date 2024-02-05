const handleImagineProfilUpload = async (file, userData, activePage) => {
    const titlu = file.name;
  
    const formData = new FormData();
    formData.append('file', file);
    formData.append('nume_elev', userData.nume);
    formData.append('active_page', activePage);
  
    try {
      const response = await fetch("http://localhost:3001/api/incarcare-media/uploads", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        console.error(`Eroare la încărcarea materialului: ${response.statusText}`);
        return;
      }
  
      const result = await response.json();
      const cale = result.imageUrl;
  
      console.log("Cale imagine:", cale);
  
      const data = {
        nume: userData.nume,
        cale: cale,
        titlu: titlu,
      };
  
      const insertResponse = await fetch("http://localhost:3001/api/profil/info-poza", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!insertResponse.ok) {
        console.error(`Eroare la inserarea datelor: ${insertResponse.statusText}`);
      } else {
        console.log("Material și datele au fost încărcate cu succes!");
      }
    } catch (error) {
      console.error(`Eroare la încărcarea materialului: ${error.message}`);
    }
  };
  
  export default handleImagineProfilUpload;