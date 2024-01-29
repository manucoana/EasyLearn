import React from 'react';
import StudiuLayout from '../../../../layout/studiu/StudiuLayout';
import "./Lectii.css";
import TitluPagina from '../../../navigare/TitluPagina';


const Lectii = () => {  
      const titluPagina = TitluPagina.Lectii;

    return (
        <div className='lectii-items'>
            <StudiuLayout titlu={titluPagina}/>
        </div >
    );
};

export default Lectii;