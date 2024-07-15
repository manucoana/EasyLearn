import React from 'react';

const MedaliiPrimite = ({ medaliiAcordate }) => {
  return (
    <div>
      <ul className="medalii-list">
        {medaliiAcordate.map((medalie) => (
          <li key={medalie.id}>
            <div className="medalie-item">
              <img src={`http://localhost:3001/api/medalii/${medalie.id}`} alt={medalie.nume} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedaliiPrimite;
