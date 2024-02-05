import axios from 'axios';

export const fetchUserData = async (email) => {
  try {
    const response = await axios.get(`http://localhost:3001/api/profil/imagini-utilizator/${email}`);
    return response.data;
  } catch (error) {
    console.log('Nu exista imagine profil');
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
    console.log('Nu exista imagine profil');
  }
};