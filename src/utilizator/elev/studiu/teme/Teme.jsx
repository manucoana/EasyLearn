import React from "react";
import StudiuLayout from "../../../../layout/studiu/StudiuLayout";
import TitluPagina from "../../../../elemente/constante/TitluPagina";

const Teme = () => {
    const titluPagina = TitluPagina.Teme;

    return (
        <div className='lectii-items'>
            <StudiuLayout titlu={titluPagina} />
        </div>
    );
};

export default Teme;
