import React from 'react';

import LogoComponent from '../../../imagini/logo/LogoComponent';
import Sfera from '../../../layout/decor/Sfera';
import ButonAutentificare from '../../../butoane/ButonAutentificare';


const SferaLogin = ({ setShowLoginComponent, setShowHeader, setShowRegister}) => {
  const handleLoginClick = () => {
    setShowLoginComponent(true);
    setShowHeader(false);
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowHeader(false);
  };

  return (
    <Sfera>
        <LogoComponent/>
      <div className='butoane-homepage'>
        <ButonAutentificare onClick={handleLoginClick} color="#141B76" text="Log In" />
        <ButonAutentificare onClick={handleRegisterClick} color="#16165b" text="Înregistrare" />
      </div>
    </Sfera>
  );
};

export default SferaLogin;
