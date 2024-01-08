import React from "react";
import StudiuLayout from "../../layout/studiu/StudiuLayout";

const Teme = ({ onClose }) => {

    const lectii = ['Tema 1', 'Tema 2', 'Tema 3'];

    return (
        <div className='lectii-items'>
            <StudiuLayout items={lectii} title="Teme" />;
        </div >
    );
};
export default Teme;

