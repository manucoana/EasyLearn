import React, { useState, useEffect } from "react";
import "./Elev.css";
import Utilizator from "../../comun/menu/Utilizator";
import useFetchUserDataId from "../../user-data/useFetchUserDataId";

const Elev = ({ userData }) => {
  const [profesorId, setProfesorId] = useState("");
  const { userDataID: profesorData } = useFetchUserDataId(profesorId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/meditatii/inscris/elev/${userData.id}`);
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          const id_profesor = data[0].id_profesor;
          setProfesorId(id_profesor);
        } else {
          console.error("Invalid data structure:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userData.id]);

  return (
    <div>
      <Utilizator profesorData={profesorData} userData={userData} tipUtilizator={userData.tip_utilizator}/>
    </div>
  );
};

export default Elev;
