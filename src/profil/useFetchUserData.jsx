import { useState, useEffect } from "react";
import axios from "axios";

const useFetchUserData = (email) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/easylearn-users/info-utilizatori/${email}`);
        const user = response.data;
        setUserData(user);
      } catch (error) {
        console.error({ message: "Error fetching user data" });
      }
    };

    fetchData();
  }, [email]);

  return {userData};
};

export default useFetchUserData;