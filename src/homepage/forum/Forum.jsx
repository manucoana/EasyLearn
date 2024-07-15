// Forum.js
import React, { useState, useEffect } from 'react';
import './Forum.css';
import PostareForum from './PostareForum';
import ListaForum from './ListaForum';
import DetaliiIntrebareForum from './DetaliiIntrebareForum';
import TextReutilizabil from '../../elemente/text/TextReutilizabil';
import SliderImagini from '../../imagini/slider/SliderImagini';
import Modal from './Modal';
import ButonReutilizabil from '../../elemente/butoane/ButonReutilizabil';

const Forum = ({ userData }) => {
  const [intrebari, setIntrebari] = useState([]);
  const [intrebareSelectata, setIntrebareSelectata] = useState(null);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const fetchIntrebari = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/forum', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('A apărut o problemă în aducerea întrebărilor de pe forum.');
      }
      const data = await response.json();
      const updatedData = data.map(intrebare => ({
        ...intrebare,
        responses: intrebare.responses || []
      }));
      setIntrebari(updatedData);
    } catch (error) {
      console.error('Eroare:', error);
    }
  };

  const adaugaIntrebare = async (question) => {
    try {
      const response = await fetch('http://localhost:3001/api/forum', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(question)
      });
      if (!response.ok) {
        throw new Error('A apărut o problemă în adăugarea întrebării pe forum.');
      }
      const data = await response.json();
      setIntrebari([...intrebari, { ...data, responses: [] }]);
      setIsPostModalOpen(false);
    } catch (error) {
      console.error('Eroare:', error);
    }
  };

  const adaugaRaspuns = async (questionId, response) => {
    try {
      const res = await fetch(`http://localhost:3001/api/forum/raspunsuri/${questionId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(response)
      });
      if (!res.ok) {
        throw new Error('A apărut o problemă în adăugarea răspunsului.');
      }
      const updatedResponse = await res.json();
      const updatedIntrebari = intrebari.map(q =>
        q.id === questionId ? { ...q, responses: [...q.responses, updatedResponse] } : q
      );
      setIntrebari(updatedIntrebari);
      return true;
    } catch (error) {
      console.error('Eroare:', error);
      return false;
    }
  };

  const selecteazaIntrebare = (question) => {
    setIntrebareSelectata(question);
    setIsDetailsModalOpen(true); 
  };

  const goBackToList = () => {
    setIntrebareSelectata(null);
    setIsDetailsModalOpen(false);
  };

  useEffect(() => {
    fetchIntrebari();
  }, []);

  return (
    <div className='forum-layout'>
      <div className="forum-container">
        <TextReutilizabil className='text-test' text='Forumul platformei Easylearn' />
        <SliderImagini />
        <div className='elemente-forum'>
          <ListaForum intrebari={intrebari} selecteazaIntrebare={selecteazaIntrebare} userData={userData} />
          <ButonReutilizabil className="buton-inregistrare" text='Postează o întrebare'  onClick={() => setIsPostModalOpen(true)}/>
        </div>
      </div>
      <Modal isOpen={isPostModalOpen} onClose={() => setIsPostModalOpen(false)}>
        <PostareForum onSubmit={adaugaIntrebare} />
      </Modal>
      <Modal isOpen={isDetailsModalOpen} onClose={() => setIsDetailsModalOpen(false)}>
        {intrebareSelectata && (
          <DetaliiIntrebareForum
            intrebare={intrebareSelectata}
            adaugaRaspuns={adaugaRaspuns}
            userData={userData}
            goBackToList={goBackToList}
          />
        )}
      </Modal>
    </div>
  );
};

export default Forum;
