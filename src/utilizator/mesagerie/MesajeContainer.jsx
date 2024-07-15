import React from "react";
import './PaginaMesaje.css';
import MesajeList from "./MesajeList";
import InputMesaj from "./InputMesaj";

const MesajeContainer = ({ mesaje, mesajNou, setMesajNou, handleSendMesaj, recipientSelected, userData }) => {
  return (
    <div className="mesaje-page">
      <div className="container-mesaje">
        <h1>Mesaje</h1>
        {recipientSelected ? (
          <MesajeList mesaje={mesaje} userData={userData} />
        ) : (
          <p>Selectați un profesor sau un elev pentru a vedea mesajele.</p>
        )}
        <InputMesaj
          mesajNou={mesajNou}
          setMesajNou={setMesajNou}
          handleSendMesaj={handleSendMesaj}
          disabled={!recipientSelected}
        />
      </div>
    </div>
  );
};

export default MesajeContainer;
