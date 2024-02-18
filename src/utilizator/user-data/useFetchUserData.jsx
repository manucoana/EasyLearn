import { useState, useEffect } from "react";
import axios from "axios";

const useFetchUserData = (email) => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (email) { 
          const response = await axios.get(`http://localhost:3001/api/easylearn-users/info-utilizatori/${email}`);
          const user = response.data;
          setUserData(user);
        } else {
          setUserData({});
        }
      } catch (error) {
        console.log("Nu au fost primite datele utilizatorului");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [email]);

  return { userData, loading };
};

export default useFetchUserData;
