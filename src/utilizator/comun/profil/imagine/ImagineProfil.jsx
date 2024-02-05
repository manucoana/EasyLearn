import React, { useState, useEffect } from 'react';
import "./ImagineProfil.css";
import LogoComponent from "../../../../imagini/logo/LogoComponent"
import  { fetchUserData, fetchProfileImage } from "../functii/showImagineProfil";

const ImagineProfil = ({ userData }) => {
  const [imagineProfil, setImagineProfil] = useState(null);
  const [existaImagine, setExistaImagine] = useState(false);
  const [nume, setNume] = useState("");
  const [titlu, setTitlu] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserData(userData.email);
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
          const imageUrl = await fetchProfileImage(nume, titlu);
          setImagineProfil(imageUrl);
          setExistaImagine(true);
        } catch (error) {
          console.log('Nu exista poza de profl:');
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
        <LogoComponent className="imagine-student-round"/>
      )}
    </div>
  );
};

export default ImagineProfil;
