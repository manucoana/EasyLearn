import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Note.css';
import TitluPagina from "../../../../elemente/constante/TitluPagina";
import StudiuLayout from '../../../../layout/studiu/StudiuLayout';

const Note = ({ userData, profesorData, elevData }) => {
  const titluPagina = TitluPagina.Note;

  const [note, setNote] = useState([]);

  console.log('userData:', userData);
  console.log('profesorData:', profesorData);
  console.log('elevData:', elevData);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        let url = '';

        if (userData && elevData || userData && profesorData) {
          if (userData.tip_utilizator === 'Elev' && profesorData) {
            url = `http://localhost:3001/api/note/${userData.id}/${profesorData.id}`;
          } else if (userData.tip_utilizator === 'Profesor' && elevData.id) {
            url = `http://localhost:3001/api/note/${elevData.id}/${userData.id}`;
          }

          if (url) {
            const response = await axios.get(url);
            setNote(response.data);
            console.log(response.data);
          } else {
            console.error("Unable to construct URL for fetching note data.");
          }
        } else {
          console.error("Missing userData or elevData.");
        }
      } catch (error) {
        console.error("There was an error fetching the note!", error);
      }
    };

    fetchNote();
  }, [userData, profesorData, elevData]);

  return (
    <div className='note-page'>
       <StudiuLayout titlu={titluPagina}/>
      <div className="note-container">
        <table className="note-table">
          <thead>
            <tr>
              <th>Nr.</th>
              <th>Tip Evaluare</th>
              <th>Nota</th>
              <th>Data Acordare</th>
              <th>Numarul lectiei</th>
            </tr>
          </thead>
          <tbody>
            {note.map((note, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{note.tip_evaluare}</td>
                <td>{note.nota}</td>
                <td>{note.data_acordare}</td>
                <td>{note.lesson_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Note;
