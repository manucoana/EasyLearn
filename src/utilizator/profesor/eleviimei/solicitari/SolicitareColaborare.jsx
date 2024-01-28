import React, { useState, useEffect } from 'react';
import "./SolicitareColaborare.css";
import axios from 'axios';
import TextReutilizabil from '../../../../elemente/text/TextReutilizabil';
import useFetchUserData from '../../../user-data/useFetchUserData';

const SolicitareColaborare = ({ email, isOpen, deschideNotificare }) => {
    const [requests, setRequests] = useState([]);
    const [id_elev, setElevIds] = useState([]);
    const { userData, loading: userDataLoading } = useFetchUserData(email);
    const [userNames, setUserNames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const id_profesor = userData?.id;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const responseRequests = await axios.get(`http://localhost:3001/api/meditatii/solicita-colaborare/${id_profesor}`);
                const responseElevIds = await axios.get(`http://localhost:3001/api/meditatii/solicita-colaborare/elevi/${id_profesor}`);

                setRequests(responseRequests.data);
                setElevIds(responseElevIds.data);
            } catch (error) {
                console.error('Error fetching collaboration requests:', error);
                setError('Error fetching collaboration requests');
            } finally {
                setLoading(false);
            }
        };

        if (id_profesor) {
            fetchData();
        }
    }, [id_profesor]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const names = [];

                for (const id of id_elev) {
                    const response = await axios.get(`http://localhost:3001/api/easylearn-users/info-utilizatori/e/${id}`);
                    names.push(response.data.nume);
                }

                setUserNames(names);
            } catch (error) {
                console.error('Error fetching user data:', error);
                setError('Error fetching user data');
            } finally {
                setLoading(false);
            }
        };

        if (id_elev.length > 0) {
            fetchData();
        }
    }, [id_elev]);

    const handleAccept = async (index) => {
        try {
            const currentIdElev = id_elev[index];

            await axios.post(`http://localhost:3001/api/meditatii/status/acceptata/${currentIdElev}`, { id_profesor });
            console.log(`Accepted ${currentIdElev} + ${id_profesor}`);
        } catch (error) {
            console.error('Error accepting collaboration request:', error);
        }
    };

    const handleReject = async (index) => {
        try {
            const currentIdElev = id_elev[index];

            await axios.post(`http://localhost:3001/api/meditatii/status/respinsa/${currentIdElev}`, { id_profesor });
            console.log(`Rejected ${currentIdElev} + ${id_profesor}`);
        } catch (error) {
            console.error('Error rejecting collaboration request:', error);
        }
    };

    if (loading || userDataLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className={`solicitare-colaborare-items ${isOpen ? 'open' : ''}`}>
            <TextReutilizabil className="text-normal" text="Cereri de colaborare" />
            <ul>
                {requests.map((request, index) => (
                    <li className='solicitare-lv' key={request.id}>
                        <TextReutilizabil className="text-mic" text={`${userNames[index]} a trimis o cerere de colaborare`} />
                        <div>
                            <button onClick={() => handleAccept(index)}>Accepta</button>
                            <button onClick={() => handleReject(index)}>Respinge</button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="close" onClick={deschideNotificare}>X</div>
        </div>
    );
};

export default SolicitareColaborare;
