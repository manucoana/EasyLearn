import React from 'react';
import './Sfera.css';

const Sfera = ({ children }) => {
  return (
    <div className='sfera-items'>
      <div className="sfera">
        {children}
      </div>
    </div>
  );
};

export default Sfera;
