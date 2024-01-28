import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LogoComponent from '../../../imagini/logo/LogoComponent';
import "./ImagineProfil.css"

const ImagineProfil = ({ userData }) => {
  const [imagineProfil, setImagineProfil] = useState(null);
  const [existaImagine, setExistaImagine] = useState(false);
  const [nume, setNume] = useState("");
  const [titlu, setTitlu] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(`http://localhost:3001/api/profil/imagini-utilizator/${userData.email}`);
        const data = response.data;
        setNume(data.nume || "");
        setTitlu(data.titlu || "");
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [userData.email, titlu]);

  useEffect(() => {
    if (nume && titlu) {
      const fetchImage = async () => {
        try {
          let response = await axios.get(`http://localhost:3001/api/profil/show/${nume}/Profil/${titlu}`, {
            responseType: 'blob',
          });

          const imageUrl = URL.createObjectURL(response.data);
          setImagineProfil(imageUrl);
          setExistaImagine(true);

          console.log(`Image fetched successfully for ${nume}/Profil/${titlu}`);
        } catch (error) {
          console.error('Error fetching image:', error);
          setExistaImagine(false);
        }
      };

      fetchImage();
    }
  }, [nume, titlu]);


  return (
    <div className="sfera-profil">
      {existaImagine ? (
        <img className='imagine-profil' src={imagineProfil} alt={`${nume}/Profil/${titlu}`} />
      ) : (
        <LogoComponent />
      )}
    </div>
  );
};

export default ImagineProfil;
