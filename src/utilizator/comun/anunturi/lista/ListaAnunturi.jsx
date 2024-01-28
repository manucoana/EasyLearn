import React, { useState, useEffect, useCallback } from "react";
import "./ListaAnunturi.css";
import Anunt from "./Anunt";
import ButoaneAnunturi from "./ButoaneAnunturi";
import { fetchListaAnunturi, setVizibilitateTrue, setVizibilitateFalse } from "../functii/vizibilitateAnunt";

const ListaAnunturi = ({ userData }) => {

  const [anunturiVizibile, setAnunturiVizibile] = useState([]);

  const fetchAnunturiVizibile = useCallback(() => {
    fetchListaAnunturi(userData.email, setAnunturiVizibile);
  }, [userData.email]);

  const handlePublicare = async () => {
    setVizibilitateTrue(userData.email, fetchAnunturiVizibile);
  };

  const handleStergere = async () => {
    setVizibilitateFalse(userData.email, fetchAnunturiVizibile);
  };

  useEffect(() => {
    fetchAnunturiVizibile();
  }, [userData.email, fetchAnunturiVizibile]);

  return (
    <div className="lista-anunturi-items">
      {userData.tip_utilizator === "Profesor" && (
        <ButoaneAnunturi handlePublicare={handlePublicare} handleStergere={handleStergere} email={userData.email} />
      )}
      {anunturiVizibile.length === 0 ? (
        <p>Nu exista niciun anunt</p>
      ) : (
        <Anunt userData={userData} anunturi={anunturiVizibile} idUtilizator={userData.id} />
      )}
    </div>
  );
};

export default ListaAnunturi;