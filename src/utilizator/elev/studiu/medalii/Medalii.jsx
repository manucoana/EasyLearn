import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Medalii.css';
import AwardMedalModal from './AwardMedalModal';
import MedaliiPrimite from './MedaliiPrimite';
import TitluPagina from "../../../../elemente/constante/TitluPagina";
import StudiuLayout from '../../../../layout/studiu/StudiuLayout';
import ButonReutilizabil from '../../../../elemente/butoane/ButonReutilizabil';

const Medalii = ({ userData, elevData, profesorData }) => {
  const [medalii, setMedalii] = useState([]);
  const [showAwardModal, setShowAwardModal] = useState(false);
  const [medaliiAcordate, setMedaliiAcordate] = useState([]);

  const titluPagina = TitluPagina.Medalii;

  useEffect(() => {
    const fetchMedalii = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/medalii');
        setMedalii(response.data);
      } catch (error) {
        console.error('Error fetching medalii:', error);
      }
    };

    fetchMedalii();
  }, []);

  useEffect(() => {
    const fetchMedaliiAcordate = async () => {
      try {
        let url = '';
        if (userData.tip_utilizator === 'Elev' && profesorData) {
          url = `http://localhost:3001/api/medalii/award/${userData.id}/${profesorData.id}`;
          const response = await axios.get(url);
          setMedaliiAcordate(response.data);
        } else if (userData.tip_utilizator === 'Profesor') {
          url = `http://localhost:3001/api/medalii/award/${elevData.id}/${userData.id}`;
          const response = await axios.get(url);
          setMedaliiAcordate(response.data);
        }
      } catch (error) {
        console.error('Error fetching awarded medals:', error);
      }
    };

    fetchMedaliiAcordate();
  }, [userData, profesorData]);

  const handleAwardMedalie = async (id_medalie) => {
    try {
      if (!elevData || !userData) {
        console.error('Elev data or user data is undefined.');
        return;
      }

      const response = await axios.post('http://localhost:3001/api/medalii/award', {
        id_elev: elevData.id,
        id_medalie,
        id_profesor: userData.id
      });

      setShowAwardModal(false);

      if (profesorData) {
        const medaliiResponse = await axios.get(`http://localhost:3001/api/medalii/award/${userData.id}/${profesorData.id}`);
        setMedaliiAcordate(medaliiResponse.data);
      } else {
        console.log('Cont profesor.');
      }
    } catch (error) {
      console.error('Error awarding medal:', error);
    }
  };


  return (
    <div>
      <StudiuLayout titlu={titluPagina} />
      {userData.tip_utilizator === 'Profesor' && (
        <ButonReutilizabil className='buton-inregistrare' onClick={() => setShowAwardModal(true)} text='Adaugă Medalie' />
      )}

      {showAwardModal && (
        <AwardMedalModal
          medalii={medalii}
          setShowAwardModal={setShowAwardModal}
          handleAwardMedalie={handleAwardMedalie}
          userData={userData}
          elevData={elevData}
          profesorData={profesorData}
        />
      )}

      {userData.tip_utilizator === 'Elev' && (
        <MedaliiPrimite medaliiAcordate={medaliiAcordate} />
      )}
      {userData.tip_utilizator === 'Profesor' && (
        <MedaliiPrimite medaliiAcordate={medaliiAcordate} />
      )}
    </div>
  );
};

export default Medalii;
