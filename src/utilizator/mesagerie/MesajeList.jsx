import React from "react";

const MesajeList = ({ mesaje, userData }) => {
  return (
    <div className="lista-mesaje">
      {mesaje.length > 0 ? (
        mesaje
          .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
          .map((mesaj, index) => (
            <div
              key={index}
              className={`mesaj ${mesaj.sender === userData.nume ? 'mesaj-user' : 'mesaj-interlocutor'}`}
            >
              <p>{mesaj.text}</p>
              <span>{new Date(mesaj.timestamp).toLocaleString()}</span>
            </div>
          ))
      ) : (
        <p>Nu există mesaje disponibile.</p>
      )}
    </div>
  );
};

export default MesajeList;
