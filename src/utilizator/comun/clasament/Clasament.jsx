import React, { useEffect, useState } from 'react';
import './Clasament.css';
import LogoComponent from '../../../imagini/logo/LogoComponent';
import TextReutilizabil from '../../../elemente/text/TextReutilizabil';

const Clasament = () => {
  const [ranking, setRanking] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/medalii/award/clasament')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setRanking(data);
      })
      .catch(error => {
        console.error('Error fetching ranking:', error);
        setError(error);
      });
  }, []);

  return (
    <div className="clasament-page">
      <div className="clasament-container"><LogoComponent/>
        <TextReutilizabil className='text-subtitlu-albastru' text='Clasamentul celor mai silitori elevi'/>
        <table className="clasament-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Total Puncte</th>
            </tr>
          </thead>
          <tbody>
            {ranking.map((student, index) => (
              <tr key={student.id_elev}>
                <td>{index + 1}</td>
                <td>{student.nume_elev}</td>
                <td>{student.total_medalii}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Clasament;
