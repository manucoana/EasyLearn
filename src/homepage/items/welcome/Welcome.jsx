import React from 'react';
import './Welcome.css';
import Titlu from './Titlu';
import SferaLogin from './SferaLogin';

const Welcome = ({ setShowTestComponent, setShowHeader, handleLogin, renderError, setShowRegister }) => {
  return (
    <div className='welcome-home'>
      <Titlu />
      <SferaLogin
        setShowTestComponent={setShowTestComponent}
        setShowHeader={setShowHeader}
        handleLogin={handleLogin}
        renderError={renderError}
        setShowRegister={setShowRegister}
      />
    </div>
  );
};

export default Welcome;