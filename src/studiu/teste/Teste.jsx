import React from "react";
import StudiuLayout from "../../layout/studiu/StudiuLayout";

const Teste = ({ onClose }) => {

    const lectii = ['Testul 1', 'Testul 2', 'Testul 3'];

    return (
        <div className='lectii-items'>
            <StudiuLayout items={lectii} title="Teste" />;
        </div >
    );
};

export default Teste;