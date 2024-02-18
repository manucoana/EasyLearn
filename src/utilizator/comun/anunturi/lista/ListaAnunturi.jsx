import React, { useState, useEffect, useCallback } from "react";
import "./ListaAnunturi.css";
import Anunt from "./Anunt";
import ButoaneAnunturi from "./ButoaneAnunturi";
import { fetchListaAnunturi, setVizibilitateTrue, setVizibilitateFalse } from "../functii/vizibilitateAnunt";
import MaterieDropdown from "../filtru/MaterieDropdown";

const ListaAnunturi = ({ userData }) => {
  
  const [anunturiVizibile, setAnunturiVizibile] = useState([]);
  const [selectedMaterie, setSelectedMaterie] = useState(null);

  const fetchAnunturiVizibile = useCallback(async () => {
    try {
      await fetchListaAnunturi(userData.email, setAnunturiVizibile, selectedMaterie);
    } catch (error) {
      console.error("Eroare afisare anunturi:", error);
    }
  }, [userData.email, selectedMaterie]);

  const handlePublicare = async () => {
    setVizibilitateTrue(userData.email, fetchAnunturiVizibile);
  };

  const handleStergere = async () => {
    setVizibilitateFalse(userData.email, fetchAnunturiVizibile);
  };

  const handleFiltrareClick = () => {
    fetchAnunturiVizibile();
  };

  useEffect(() => {
    fetchAnunturiVizibile();
  }, [userData.email, selectedMaterie, fetchAnunturiVizibile]);

  return (
    <div className="lista-anunturi-items">
      <div className="filtru-lista">
        <MaterieDropdown setSelectedMaterie={setSelectedMaterie} onChange={handleFiltrareClick} />
        {anunturiVizibile.length === 0 ? (
          <p>Nu exista niciun anunt</p>
        ) : (
          <div className="lista">
            {userData.tip_utilizator === "Profesor" && (
              <ButoaneAnunturi handlePublicare={handlePublicare} handleStergere={handleStergere} email={userData.email} />
            )}
            <Anunt userData={userData} anunturi={anunturiVizibile} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ListaAnunturi;