import React from 'react';
import ItemForum from './ItemForum';

const ListaForum = ({ intrebari, selecteazaIntrebare, userData }) => {
  return (
    <div className="question-list">
      {intrebari.map((intrebare) => (
        <ItemForum key={intrebare.id} intrebare={intrebare} selecteazaIntrebare={selecteazaIntrebare} userData={userData} />
      ))}
    </div>
  );
};

export default ListaForum;
