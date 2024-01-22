import React, { useState, useEffect, useCallback } from "react";
import "./ListaAnunturi.css";
import axios from "axios";
import Anunt from "./Anunt";
import ButonReutilizabil from "../butoane/ButonReutilizabil";

const ListaAnunturi = ({ email, userType }) => {

  const [anunturiVizibile, setAnunturiVizibile] = useState([]);
  const [nume_profesor, setNumeProfesor] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/easylearn-users/info-utilizatori/${email}`);
        const user = response.data;
        setNumeProfesor(user.nume);
        console.log(nume_profesor)
      } catch (error) {
        console.error({ message: "Error fetching user data" });
      }
    };

    fetchData();
  }, [email, nume_profesor]);

  const fetchAnunturiVizibile = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/anunt/vizibilitate?email=${email}`);
      const data = await response.json();
      setAnunturiVizibile(data);
    } catch (error) {
      console.error("Eroare la vizibilitate:", error);
    }
  }, [email]);

  const handlePublicare = async () => {
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

  const handleStergere = async () => {
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

  useEffect(() => {
    const fetchData = async () => {
      await fetchAnunturiVizibile();
    };

    fetchData();
  }, [email, fetchAnunturiVizibile]);



  return (
    <div className="lista-anunturi-items">
      <div className="titlu-lista-anunturi">
        {userType === "Profesor" && (
          <div className="butoane-lista-anunturi">
            <ButonReutilizabil
              className="buton-publicare"
              onClick={handlePublicare}
              text={"PUBLICA ANUNTUL"}
              email={email}
            />
            <ButonReutilizabil
              className="buton-publicare"
              onClick={handleStergere}
              text={"STERGE ANUNTUL"}
              email={email}
            />
          </div>
        )}
      </div>
      {anunturiVizibile.length === 0 ? (
        <p>Nu exista niciun anunt</p>
      ) : (
        <Anunt anunturi={anunturiVizibile} />
      )}

    </div>
  );
};

export default ListaAnunturi;
