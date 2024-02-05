import React, { useState, useEffect } from 'react';
import TextReutilizabil from '../../../../elemente/text/TextReutilizabil';
import SolicitareItem from './SolicitareItem';
import { fetchDataSolicitari, fetchNumeElevi, handleAcceptRequest, handleRespinsRequest } from './functii/functiiSolicitari';
import "./SolicitareColaborare.css";

const SolicitareColaborare = ({ userData, isOpen, deschideNotificare }) => {
    const [solicitari, setSolicitari] = useState([]);
    const [idElev, setElevIds] = useState([]);
    const [userNames, setUserNames] = useState([]);
    const [error, setError] = useState(null);

    const id_profesor = userData?.id;

    useEffect(() => {
        if (id_profesor) {
            fetchDataSolicitari(id_profesor, setSolicitari, setElevIds, setError);
        }
    }, [id_profesor]);

    useEffect(() => {
        if (idElev.length > 0) {
            fetchNumeElevi(idElev, setUserNames, setError);
        }
    }, [idElev]);

    const handleAccept = async (index) => {
        const currentIdElev = idElev[index];
        await handleAcceptRequest(currentIdElev, id_profesor);
    };

    const handleRespins = async (index) => {
        const currentIdElev = idElev[index];
        await handleRespinsRequest(currentIdElev, id_profesor);
    };

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className={`solicitare-colaborare-items ${isOpen ? 'open' : ''}`}>
            <TextReutilizabil className="text-normal" text="Cereri de colaborare" />
            <ul>
                {solicitari.map((request, index) => (
                    <SolicitareItem
                        key={request.id}
                        userName={userNames[index]}
                        onAccept={() => handleAccept(index)}
                        onReject={() => handleRespins(index)}
                    />
                ))}
            </ul>
            <div className="close" onClick={deschideNotificare}>X</div>
        </div>
    );
};

export default SolicitareColaborare;
