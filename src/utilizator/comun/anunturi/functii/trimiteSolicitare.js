import axios from "axios";

const trimiteSolicitare = async (idUtilizator, profesorSelectatData) => {
  try {
    const idElev = idUtilizator;
    console.log("Id elev: " + idUtilizator);

    const idProfesor = profesorSelectatData.id;
    console.log("Id profesor: " + profesorSelectatData.id);

    const response = await axios.post('http://localhost:3001/api/meditatii/solicita-colaborare', { idElev, idProfesor });

    console.log(response.data.message);
    alert('Solicitarea de colaborare a fost trimisa cu succes.');
  } catch (error) {
    console.error('Error sending request:', error);
    alert('A aparut o eroare. Va rugam să încercati din nou mai tarziu.');
  }
};

export default trimiteSolicitare;