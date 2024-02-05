import React from 'react';
import Sfera from './Sfera';
import { LOG_IN, INREGISTRARE } from "../../elemente/constante/ButonConstant";
import ButonReutilizabil from '../../elemente/butoane/ButonReutilizabil';
import LogoComponent from '../../imagini/logo/LogoComponent';

const SferaLogin = ({ setShowLogin, setShowRegister }) => {

  const logIn = LOG_IN;
  const inregistrare = INREGISTRARE;

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  return (
    <Sfera>
      <LogoComponent/>
      <div className='butoane-homepage'>
        <ButonReutilizabil className="buton-login" onClick={handleLoginClick} text={logIn} />
        <ButonReutilizabil className="buton-inregistrare" onClick={handleRegisterClick} text={inregistrare} />
      </div>
    </Sfera>
  );
};

export default SferaLogin;
