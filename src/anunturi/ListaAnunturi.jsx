import React, { useState, useEffect } from "react";
import "./ListaAnunturi.css"
import TextReutilizabil from "../text/TextReutilizabil";
import {
  LISTA_ANUNTURI,
} from "../constante/ButonConstant"
import Anunt from "./Anunt";

const ListaAnunturi = () => {

  const listaAnunturi = LISTA_ANUNTURI;

  const [anunturiVizibile, setAnunturiVizibile] = useState([]);

  useEffect(() => {
    const fetchAnunturiVizibile = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/vizibilitate");
        const data = await response.json();

        setAnunturiVizibile(data);

      } catch (error) {
        console.error("Eroare la anunturi:", error);
      }
    };

    fetchAnunturiVizibile();
  }, []);

  return (
    <div className="lista-anunturi-items">
      <div className="titlu-lista-anunturi">
      <TextReutilizabil className="text-reutilizabil-3" text={listaAnunturi} />
      </div>
      {anunturiVizibile.length === 0 ? (
        <p>Nu exista niciun anunt</p>
      ) : (
        <ul>
        {anunturiVizibile.map((anunt, index) => (
          <Anunt key={anunt.id_anunt} anunt={anunt} index={index} />
        ))}
      </ul>
      )}
    </div>
  );
};

export default ListaAnunturi;
