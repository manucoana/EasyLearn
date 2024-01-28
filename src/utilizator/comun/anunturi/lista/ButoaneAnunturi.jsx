import React from "react";
import ButonReutilizabil from "../../../../elemente/butoane/ButonReutilizabil";

const ButoaneAnunturi = ({ handlePublicare, handleStergere, email }) => {
  return (
    <div className="butoane-lista-anunturi">
      <ButonReutilizabil className="buton-publicare" onClick={handlePublicare} text={"PUBLICA ANUNTUL"} email={email}/>
      <ButonReutilizabil className="buton-publicare" onClick={handleStergere} text={"STERGE ANUNTUL"} email={email}/>
    </div>
  );
};

export default ButoaneAnunturi;
