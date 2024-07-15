import React, { useState } from 'react';
import ButonReutilizabil from '../../elemente/butoane/ButonReutilizabil';
import './RaspunsuriForum.css';

const RaspunsuriForum = ({ responses, onAddResponse }) => {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onAddResponse(text);
    setText('');
  };

  return (
    <div className="raspunsuri-container">
      <h3>Răspunsuri</h3>
      <ul>
        {responses.map((response, index) => (
          <li key={index}>
            <p>{response.text}</p>
            <small>Utilizator ID: {response.user_id}</small>
          </li>
        ))}
      </ul>
      <form className='form-raspuns' onSubmit={handleSubmit}>
        <textarea className='textarea-raspuns'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Scrie un răspuns"
          required
        />
        <ButonReutilizabil className='buton-inregistrare' text='Postează răspunsul' />
      </form>
    </div>
  );
};

export default RaspunsuriForum;
