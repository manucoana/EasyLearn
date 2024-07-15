import axios from 'axios';

export const fetchUserData = async (email) => {
  try {
    const response = await axios.get(`http://localhost:3001/api/profil/imagini-utilizator/${email}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log('Imagina de profil nu a fost gasita');
    } else {
      console.log('Error fetching user data');
    }
  }
};

export const fetchProfileImage = async (nume, titlu) => {
  try {
    const response = await axios.get(`http://localhost:3001/api/profil/show/${nume}/Profil/${titlu}`, {
      responseType: 'blob',
    });

    const imageUrl = URL.createObjectURL(response.data);
    console.log(`Image fetched successfully for ${nume}/Profil/${titlu}`);
    return imageUrl;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.log('Unauthorized - User not authenticated');
    } else if (error.response && error.response.status === 404) {
      console.log('Nu exista imagine profil');
    } else {
      console.log('Error');
    }
  }
};
