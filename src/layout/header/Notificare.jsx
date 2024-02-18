import React, { useState } from 'react';
import IconNotificari from '../../imagini/icons/IconNotificari';
import SolicitareColaborare from '../../utilizator/profesor/eleviimei/solicitari/SolicitareColaborare';

const Notificare = ({ userData }) => {
    const [isNotificareOpen, setIsNotificareOpen] = useState(false);

    const deschideNotificare = () => {
        setIsNotificareOpen(!isNotificareOpen);
    };

    return (
        <>
            {userData?.tip_utilizator === 'Profesor' && (
                <IconNotificari deschideNotificare={deschideNotificare} isNotificareOpen={isNotificareOpen} />
            )}
            {isNotificareOpen && (
                <SolicitareColaborare isOpen={isNotificareOpen} deschideNotificare={deschideNotificare} userData={userData} />
            )}
        </>
    );
};

export default Notificare;