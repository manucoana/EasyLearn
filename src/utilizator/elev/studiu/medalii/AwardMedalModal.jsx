import React from 'react';

const AwardMedalModal = ({
  medalii,
  setShowAwardModal,
  handleAwardMedalie,
}) => {
  const closeModal = () => {
    setShowAwardModal(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h3>Acordă Medalie</h3>
        <ul className="medalii-list">
          {medalii.map((medalie) => (
            <li key={medalie.id} onClick={() => handleAwardMedalie(medalie.id)}>
              <div className="medalie-item">
                <img src={`http://localhost:3001/api/medalii/${medalie.id}`} alt={medalie.nume} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AwardMedalModal;
