import React, { useState, useEffect } from "react";
import NavigareProfesor from "../../navigare/NavigareProfesor";
import NavigareElev from "../../navigare/NavigareElev";
import MesajeContainer from "./MesajeContainer";
import { fetchMesaje, fetchMesajeByRecipient, sendMesaj } from "./mesgerie.js"

const PaginaMesaje = ({ userData }) => {
  const [mesaje, setMesaje] = useState([]);
  const [mesajNou, setMesajNou] = useState("");
  const [profesorData, setProfesorData] = useState(null);
  const [elevData, setElevData] = useState(null);
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    setActivePage("Mesaje");
    console.log("Pagina activă:", activePage);
  }, [activePage]);

  useEffect(() => {
    const incarcaMesaje = async () => {
      try {
        const mesaje = await fetchMesaje(userData.id);
        setMesaje(mesaje);
      } catch (error) {
        console.error("Eroare la încărcarea mesajelor:", error);
      }
    };
    incarcaMesaje();
  }, [userData]);

  const handleSelectRecipient = async (recipient, type) => {
    if (type === 'profesor') {
      setProfesorData(recipient);
      setElevData(null);
    } else {
      setElevData(recipient);
      setProfesorData(null);
    }

    try {
      const mesaje = await fetchMesajeByRecipient(userData.id, recipient.id || recipient.id_elev);
      setMesaje(mesaje);
    } catch (error) {
      console.error(`Eroare la încărcarea mesajelor pentru ${type} selectat:`, error);
    }
  };

  const handleSendMesaj = async () => {
    const recipient = profesorData || elevData;
    if (recipient) {
      try {
        const newMesaj = await sendMesaj(userData.id, recipient.id || recipient.id_elev, mesajNou);
        setMesaje([...mesaje, newMesaj]);
        setMesajNou("");
      } catch (error) {
        console.error("Eroare la trimiterea mesajului:", error);
      }
    }
  };

  return (
    <div>
      {userData.tip_utilizator === 'Elev' ? (
        <NavigareProfesor userData={userData} onProfessorSelect={(profesor) => handleSelectRecipient(profesor, 'profesor')} />
      ) : (
        <NavigareElev userData={userData} onElevSelect={(elev) => handleSelectRecipient(elev, 'elev')} />
      )}
      <MesajeContainer
        mesaje={mesaje}
        mesajNou={mesajNou}
        setMesajNou={setMesajNou}
        handleSendMesaj={handleSendMesaj}
        recipientSelected={profesorData || elevData}
        userData={userData}
      />
    </div>
  );
};

export default PaginaMesaje;
