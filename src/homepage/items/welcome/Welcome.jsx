import React from 'react';
import './Welcome.css';
import Titlu from '../../../text/Titlu';
import SferaLogin from './SferaLogin';

const Welcome = ({ setShowLoginComponent, setShowHeader, handleLogin, renderError, setShowRegister }) => {
  return (
    <div className='welcome-home'>
      <Titlu />
      <SferaLogin
        setShowLoginComponent={setShowLoginComponent}
        setShowHeader={setShowHeader}
        handleLogin={handleLogin}
        renderError={renderError}
        setShowRegister={setShowRegister}
      />
    </div>
  );
};

export default Welcome;