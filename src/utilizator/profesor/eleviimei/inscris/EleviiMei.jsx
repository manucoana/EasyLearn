import React, { useState, useEffect } from "react";
import { fetchEleviData } from "../functii/fetchEleviData";
import Paginare from "./Paginare";
import "./EleviiMei.css";
import ListaInscris from "../../../../navigare/ListaInscris";

const calculRanduri = (numElevi) => Math.ceil(numElevi / 3);

const EleviiMei = ({ userData }) => {
  const [elevi, setElevi] = useState([]);
  const [paginaCurenta, setPaginaCurenta] = useState(1);
  const [activeLesson, setActiveLesson] = useState(null);
  const [selectedElev, setSelectedElev] = useState(null);
  const [activePage, setActivePage] = useState("");
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    fetchEleviData(userData?.id, setElevi);
  }, [userData?.id]);

  const handlePaginaUrmatoare = () => {
    setPaginaCurenta((prevPage) => prevPage + 1);
  };

  const handlePaginaAnterioara = () => {
    setPaginaCurenta((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIdx = (paginaCurenta - 1) * 3;
  const endIdx = paginaCurenta * 3;
  const eleviInscrisi = elevi.slice(startIdx, endIdx);

  const handleSelectElev = (elev) => {
    setSelectedElev(elev);
    setActiveLesson(null); 
  };

  const handleAddButton = () => setButtons((prevButtons) => [...prevButtons, prevButtons.length + 1]);

  return (
    <div className="elevii-mei-items">
      <Paginare paginaCurenta={paginaCurenta} calculRanduri={calculRanduri} handlePaginaAnterioara={handlePaginaAnterioara} handlePaginaUrmatoare={handlePaginaUrmatoare} elevi={elevi} endIdx={endIdx} />
      <ListaInscris eleviInscrisi={eleviInscrisi} userData={userData} onSelectElev={handleSelectElev} />
    </div>
  );
};

export default EleviiMei;
