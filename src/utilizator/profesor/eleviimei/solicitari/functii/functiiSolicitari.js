import axios from 'axios';

export const fetchDataSolicitari = async (id_profesor, setSolicitari, setElevIds, setError) => {
    try {
        const solicitariProfesor = await axios.get(`http://localhost:3001/api/meditatii/solicita-colaborare/${id_profesor}`);
        const idElevValori = solicitariProfesor.data.map(solicitare => solicitare.id_elev);

        setSolicitari(solicitariProfesor.data);
        setElevIds(idElevValori);
    } catch (error) {
        console.error('Eroare afisare solicitari colaborare:', error);
        setError('Eroare afisare solicitari colaborare');
    }
};

export const fetchNumeElevi = async (idElev, setUserNames, setError) => {
    try {
        const names = [];

        for (const id of idElev) {
            const response = await axios.get(`http://localhost:3001/api/easylearn-users/info-utilizatori/by-id/${id}`);
            names.push(response.data.nume);
        }

        setUserNames(names);
    } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Error fetching user data');
    }
};

export const handleAcceptRequest = async (idElev, id_profesor) => {
    try {
        const currentIdElev = idElev;

        await axios.post(`http://localhost:3001/api/meditatii/status/acceptata/${currentIdElev}`, { id_profesor });
        console.log(`Accepted ${currentIdElev} + ${id_profesor}`);
    } catch (error) {
        console.error('Error accepting collaboration request:', error);
    }
};

export const handleRespinsRequest = async (idElev, id_profesor) => {
    try {
        const currentIdElev = idElev;

        await axios.post(`http://localhost:3001/api/meditatii/status/respinsa/${currentIdElev}`, { id_profesor });
        console.log(`Rejected ${currentIdElev} + ${id_profesor}`);
    } catch (error) {
        console.error('Error rejecting collaboration request:', error);
    }
};
