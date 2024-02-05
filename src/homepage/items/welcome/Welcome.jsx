import React from 'react';
import './Welcome.css';
import Titlu from '../../../elemente/text/Titlu';
import SferaLogin from '../../../layout/sfera/SferaLogin';

const Welcome = ({ setShowLogin, handleLogin, renderError, setShowRegister }) => {
  return (
    <div className='welcome-home'>
      <Titlu />
      <SferaLogin
        setShowLogin={setShowLogin}
        handleLogin={handleLogin}
        renderError={renderError}
        setShowRegister={setShowRegister}
      />
    </div>
  );
};

export default Welcome;