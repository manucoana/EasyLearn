import React from 'react';
import LogoComponent from '../../../imagini/LogoComponent';
import ButonLogin from '../../../login/form/butoane/login/ButonLogin';
import ButonInregistrare from '../../../login/form/butoane/inregistrare/ButonInregistrare';

const SferaLogin = ({ setShowTestComponent, setShowHeader, handleLogin, renderError, setShowRegister }) => {
  const handleButtonClick = () => {
    setShowTestComponent(true);
    setShowHeader(false);
  };

  const handleButton2Click = () => {
    setShowRegister(true);
    setShowHeader(false);
  };

  return (
    <div className="decor-sfera">
      <div className='logo'>
        <LogoComponent />
      </div>
      <div className='butoane-main'>
        <ButonLogin onClick={handleButtonClick} />
        <ButonInregistrare onClick={handleButton2Click} />
      </div>
    </div>
  );
};

export default SferaLogin;
