import React, { useState, useEffect } from "react";
import "./ListaAnunturi.css";
import TextReutilizabil from "../text/TextReutilizabil";
import { LISTA_ANUNTURI } from "../constante/ButonConstant";
import Anunt from "./Anunt";
import ButonAutentificare from "../butoane/ButonAutentificare";

const ListaAnunturi = ({ email, userType }) => {
  const listaAnunturi = LISTA_ANUNTURI;
  const [anunturiVizibile, setAnunturiVizibile] = useState([]);
  const [vizibilitate, setVizibilitate] = useState(false);

  const fetchAnunturiVizibile = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/vizibilitate?email=${email}`);
      const data = await response.json();

      setVizibilitate(data.length > 0);

      setAnunturiVizibile(data);
    } catch (error) {
      console.error("Eroare la anunturi:", error);
    }
  };

  const handlePublicare = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/setVizibilitateTrue", {
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
      await fetch("http://localhost:3001/api/setVizibilitateFalse", {
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
    fetchAnunturiVizibile();
  }, [email]);

  return (
    <div className="lista-anunturi-items">
      <div className="titlu-lista-anunturi">
        <TextReutilizabil className="text-reutilizabil-3" text={listaAnunturi} />
        {userType === "Profesor" && (
          <div className="butoane-lista-anunturi">
            <ButonAutentificare
              className="buton-publicare"
              onClick={handlePublicare}
              text={"PUBLICA ANUNTUL"}
              email={email}
            />
            <ButonAutentificare
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
