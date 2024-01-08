import React from 'react';
import Sfera from '../../../layout/decor/Sfera';
import ButonAutentificare from '../../../butoane/ButonAutentificare';
import { LOG_IN, INREGISTRARE } from "../../../constante/ButonConstant";


const SferaLogin = ({ setShowLoginComponent, setShowHeader, setShowRegister }) => {

  const logIn = LOG_IN;
  const inregistrare = INREGISTRARE;

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
      <div className='butoane-homepage'>
        <ButonAutentificare className="buton-autentificare-login" onClick={handleLoginClick} text={logIn} />
        <ButonAutentificare className="buton-autentificare-inregistrare" onClick={handleRegisterClick} text={inregistrare} />
      </div>
    </Sfera>
  );
};

export default SferaLogin;
