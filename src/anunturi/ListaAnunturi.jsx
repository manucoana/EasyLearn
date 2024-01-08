import React, { useState, useEffect } from "react";
import "./ListaAnunturi.css"
import TextReutilizabil from "../text/TextReutilizabil";
import {
  LISTA_ANUNTURI,
} from "../constante/ButonConstant"

const ListaAnunturi = () => {

  const listaAnunturi = LISTA_ANUNTURI;

  const [visibleAnnouncements, setVisibleAnnouncements] = useState([]);

  useEffect(() => {
    const fetchVisibleAnnouncements = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/vizibilitate");
        const data = await response.json();

        setVisibleAnnouncements(data);

      } catch (error) {
        console.error("Eroare la anunturi:", error);
      }
    };

    fetchVisibleAnnouncements();
  }, []);

  return (
    <div className="lista-anunturi-items">
      <div className="titlu-lista-anunturi">
      <TextReutilizabil className="text-reutilizabil-3" text={listaAnunturi} />
      </div>
      {visibleAnnouncements.length === 0 ? (
        <p>Nu exista niciun anunt</p>
      ) : (
        <ul>
          {visibleAnnouncements.map((announcement, index) => (
            <li
              key={announcement.id_anunt}
              className={index % 2 === 0 ? "par" : "impar"} 
            >
              <strong>Nume:</strong> {announcement.nume}
              <br />
              <strong>Text Anunt:</strong> {announcement.text_anunt || "N/A"}
              <br />
              <strong>Data:</strong> {announcement.data || "N/A"}
              <br />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListaAnunturi;
