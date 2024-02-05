import { useState, useEffect } from "react";
import axios from "axios";

const useFetchUserDataId = (id) => {
    const [userDataID, setUserDataID] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/easylearn-users/info-utilizatori/by-id/${id}`);
                const user = response.data;
                setUserDataID(user);
            } catch (error) {
                console.error({ message: "Error fetching user data" });
            }
        };

        fetchData();
    }, [id]);

    return { userDataID };
};

export default useFetchUserDataId;