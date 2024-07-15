import React from "react";

const InputMesaj = ({ mesajNou, setMesajNou, handleSendMesaj, disabled }) => {
  return (
    <>
      <input
        type="text"
        value={mesajNou}
        onChange={(e) => setMesajNou(e.target.value)}
        placeholder="Scrie un mesaj"
        disabled={disabled}
      />
      <button onClick={handleSendMesaj} disabled={disabled}>Trimite</button>
    </>
  );
};

export default InputMesaj;
