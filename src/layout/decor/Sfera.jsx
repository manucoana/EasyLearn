import React from 'react';
import './Sfera.css';
import LogoComponent from '../../imagini/logo/LogoComponent';

const Sfera = ({ children }) => {
  return (
      <div className="sfera">
        <LogoComponent />
        {children}
      </div>
  );
};

export default Sfera;
