export const fetchListaAnunturi = async (userData, setAnunturiVizibile) => {
  try {
    const response = await fetch(`http://localhost:3001/api/anunt/vizibilitate?email=${userData.email}`);
    const data = await response.json();
    setAnunturiVizibile(data);
  } catch (error) {
    console.error("Eroare la vizibilitate:", error);
  }
};

export const setVizibilitateTrue = async (email, fetchAnunturiVizibile) => {
  try {
    const response = await fetch("http://localhost:3001/api/anunt/vizibilitate/setVizibilitateTrue", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email || "" }),
    });

    if (response.ok) {
      console.log("Vizibilitate setata cu succes");
      await fetchAnunturiVizibile();
    } else {
      console.error("Eroare la setarea vizibilitatii:", response.statusText);
    }
  } catch (error) {
    console.error("Eroare la comunicarea cu serverul:", error);
  }
};

export const setVizibilitateFalse = async (email, fetchAnunturiVizibile) => {
  try {
    await fetch("http://localhost:3001/api/anunt/vizibilitate/setVizibilitateFalse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });

    await fetchAnunturiVizibile();
  } catch (error) {
    console.error("Eroare la stergere", error);
  }
};
