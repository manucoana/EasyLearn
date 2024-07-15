import React from 'react';

const ItemForum = ({ intrebare, selecteazaIntrebare }) => {
  return (
    <div className="question-item" onClick={() => selecteazaIntrebare(intrebare)} style={{ cursor: 'pointer' }}>
      <p style={{ fontWeight: 'bold' }}>{intrebare.text}</p>
    </div>
  );
};

export default ItemForum;
