import React from 'react';
import './Sfera.css';

const Sfera = ({ children, onClick }) => {
  return (
    <div className='sfera-items' onClick={onClick}>
      <div className="sfera">
        {children}
      </div>
    </div>
  );
};

export default Sfera;
