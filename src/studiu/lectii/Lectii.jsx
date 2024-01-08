import React from 'react';
import StudiuLayout from '../../layout/studiu/StudiuLayout';
import "./Lectii.css";


const Lectii = () => {
    const lectii = ['Lecția 1', 'Lecția 2', 'Lecția 3'];

    return (
        <div className='lectii-items'>
            <StudiuLayout items={lectii} title="Lecții" />
        </div >
    );
};

export default Lectii;