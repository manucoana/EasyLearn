import React from "react";
import StudiuLayout from "../../../../layout/studiu/StudiuLayout";
import TitluPagina from "../../../../elemente/constante/TitluPagina";

const Teste = () => {
    const titluPagina = TitluPagina.Teste;

    return (
        <div className='lectii-items'>
            <StudiuLayout titlu={titluPagina}/>
        </div >
    );
};

export default Teste;