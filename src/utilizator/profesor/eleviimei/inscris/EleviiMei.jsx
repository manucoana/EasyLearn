import React, { useState, useEffect } from "react";
import { fetchEleviData } from "../functii/fetchEleviData";
import EleviList from "./EleviList";
import PaginareElevi from "./PaginareElevi";
import "./EleviiMei.css";

const calculRanduri = (numElevi) => Math.ceil(numElevi / 3);

const EleviiMei = ({ userData }) => {
  const [elevi, setElevi] = useState([]);
  const [paginaCurenta, setPaginaCurenta] = useState(1);

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

  return (
    <div className="elevii-mei-items">
      <PaginareElevi paginaCurenta={paginaCurenta} calculRanduri={calculRanduri} handlePaginaAnterioara={handlePaginaAnterioara} handlePaginaUrmatoare={handlePaginaUrmatoare} elevi={elevi} endIdx={endIdx} />
      <EleviList eleviInscrisi={eleviInscrisi} userData={userData} />
    </div>
  );
};

export default EleviiMei;
