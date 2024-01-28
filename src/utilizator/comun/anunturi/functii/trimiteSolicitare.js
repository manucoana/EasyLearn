import axios from "axios";

const trimiteSolicitare = async (idUtilizator, userData) => {
  try {
    const idElev = idUtilizator;
    console.log("Nume elev: " + idUtilizator);

    const idProfesor = userData.id;
    console.log("Nume profesor: " + userData.id);

    const response = await axios.post('http://localhost:3001/api/meditatii/solicita-colaborare', { idElev, idProfesor });

    console.log(response.data.message);
    alert('Solicitarea de colaborare a fost trimisa cu succes.');
  } catch (error) {
    console.error('Error sending request:', error);
    alert('A aparut o eroare. Va rugam să încercati din nou mai tarziu.');
  }
};

export default trimiteSolicitare;