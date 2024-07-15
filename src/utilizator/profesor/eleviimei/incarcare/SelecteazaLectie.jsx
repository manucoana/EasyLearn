import React from "react";
import "./SelecteazaLectie.css";

const SelecteazaLectie = ({ buttons, activeLesson, setActiveLesson, activePage }) => {
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setActiveLesson(selectedValue === "" ? null : parseInt(selectedValue));
  };

  return (
    <div className="selecteaza-lectie">
      <p className="lectii-disponibile">Ai {buttons.length} lecții disponibile, selectează o lecție:</p>
      <select className="dropdown-lectii" value={activeLesson || ""} onChange={handleChange}>
        <option value="" disabled>Selectează</option>
        {buttons.map((button, index) => (
          <option key={index + 1} value={index + 1}>{`${activePage} ${index + 1}`}</option>
        ))}
      </select>
    </div>
  );
};

export default SelecteazaLectie;
