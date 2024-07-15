import React from "react";
import './Paginare.css'

const Paginare = ({ paginaCurenta, calculRanduri, handlePaginaAnterioara, handlePaginaUrmatoare, elevi, endIdx }) => (
    elevi.length > 3 && (
        <div className="paginare">
            <button onClick={handlePaginaAnterioara} disabled={paginaCurenta === 1}>&lt;</button>
            <span>{`${paginaCurenta} / ${calculRanduri(elevi.length)}`}</span>
            <button onClick={handlePaginaUrmatoare} disabled={endIdx >= elevi.length}>&gt;</button>
        </div>
    )
);

export default Paginare;
