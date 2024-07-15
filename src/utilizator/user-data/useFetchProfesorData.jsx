import { useState, useEffect } from "react";

const useFetchProfesorData = (userData) => {
  const [profesorId, setProfesorId] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataForUser = async () => {
      try {
        if (!userData || !userData.id) {
          return;
        }

        const response = await fetch(`http://localhost:3001/api/meditatii/inscris/elev/${userData.id}`);
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          const id_profesor = data[0].id_profesor;
          setProfesorId(id_profesor);
        } else {
          console.error("Invalid data structure:", data);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataForUser();
  }, [userData]);

  return { profesorId, loading };
};

export default useFetchProfesorData;