import React, { useState, useEffect } from 'react';
import "./SolicitareColaborare.css";
import axios from 'axios';
import useFetchUserData from '../../profil/useFetchUserData';
import TextReutilizabil from '../../elemente/text/TextReutilizabil';

const SolicitareColaborare = ({ id, email }) => {
    const [requests, setRequests] = useState([]);
    const [id_elev, setElevIds] = useState([]);
    const { userData } = useFetchUserData(email);
    const [userNames, setUserNames] = useState([]);

    const id_profesor = userData.id;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseRequests = await axios.get(`http://localhost:3001/api/meditatii/solicita-colaborare/${id_profesor}`);
                const responseElevIds = await axios.get(`http://localhost:3001/api/meditatii/solicita-colaborare/elevi/${id_profesor}`);

                setRequests(responseRequests.data);
                setElevIds(responseElevIds.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id_profesor]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const names = [];

                for (const id of id_elev) {
                    const response = await axios.get(`http://localhost:3001/api/easylearn-users/info-utilizatori/e/${id}`);
                    names.push(response.data.nume);
                }

                setUserNames(names);
            } catch (error) {
                console.error({ message: "Error fetching user data" });
            }
        };

        fetchData();
    }, [id_elev]);


    const handleAccept = async (index) => {
        try {
            const currentIdElev = id_elev[index];
            const id_profesor = userData?.id;

            console.log('id_profesor:', id_profesor);

            await axios.post(`http://localhost:3001/api/meditatii/status/acceptata/${currentIdElev}`, { id_profesor });
            console.log(`Acceptat ${currentIdElev} + ${id_profesor}`);
        } catch (error) {
            console.error('Error accepting collaboration request:', error);
        }
    };


    const handleReject = async (index) => {
        try {
            const currentIdElev = id_elev[index];
            const id_profesor = userData?.id;

            await axios.post(`http://localhost:3001/api/meditatii/status/respinsa/${currentIdElev}`, { id_profesor });
            console.log(`Respins ${currentIdElev} + ${id_profesor}`);
        } catch (error) {
            console.error('Error rejecting collaboration request:', error);
        }
    };



    return (
        <div className="solicitare-colaborare-items">
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
        </div>
    );
};

export default SolicitareColaborare;
