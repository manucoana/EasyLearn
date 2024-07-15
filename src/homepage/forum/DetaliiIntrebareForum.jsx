import React, { useState, useEffect } from 'react';
import RaspunsuriForum from './RaspunsuriForum';
import ButonReutilizabil from '../../elemente/butoane/ButonReutilizabil';

const DetaliiIntrebareForum = ({ intrebare, adaugaRaspuns, userData, goBackToList }) => {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    fetchResponses();
  }, []);

  const fetchResponses = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/forum/raspunsuri/${intrebare.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('A apărut o problemă în aducerea răspunsurilor.');
      }
      const data = await response.json();
      setResponses(data);
    } catch (error) {
      console.error('Eroare:', error);
    }
  };

  const handleAddResponse = async (text) => {
    const newResponse = {
      text,
      user_id: userData?.id || 1
    };
    const success = await adaugaRaspuns(intrebare.id, newResponse);
    if (success) {
      fetchResponses();
    } else {
      alert('Failed to post the response. Please try again.');
    }
  };

  return (
    <div>
      <h2>{intrebare.titlu}</h2>
      <p>{intrebare.text}</p>
      <RaspunsuriForum responses={responses} onAddResponse={handleAddResponse} />
    </div>
  );
};

export default DetaliiIntrebareForum;
