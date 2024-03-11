import axios from "axios";

export const fetchEleviData = (userId, setElevi, setErrorMessages) => {
  if (userId) {
    axios
      .get(`http://localhost:3001/api/meditatii/inscris/${userId}`)
      .then((response) => {
        const elevi = response.data.map((elev) => ({
          ...elev,
          elevData: elev.detalii_elev,
        }));
        setElevi(elevi);
        setErrorMessages({});
      })
      .catch((error) => {
        console.log(error);
        setErrorMessages({
          message: "Eroare la preluarea datelor din elevi",
        });
      });
  }
};
