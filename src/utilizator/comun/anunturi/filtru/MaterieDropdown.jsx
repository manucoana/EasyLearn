import React, { useState, useEffect } from 'react';
import "./MaterieDropdown.css"
import { fetchMateriiDisponibile } from "../functii/fetchMateriiDisponibile"

const MaterieDropdown = ({ setSelectedMaterie, onChange }) => {
    const [materii, setMaterii] = useState([]);
    const [materieSelectata, setMaterieSelectata] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchMateriiDisponibile();
                setMaterii(data);
            } catch (error) {
                console.error('Eroare la obtinerea materiilor:', error);
            }
        };

        fetchData();
    }, []);

    const handleMaterieChange = (event) => {
        const valoareMaterieSelectata = event.target.value;
        setMaterieSelectata(valoareMaterieSelectata);
        setSelectedMaterie(valoareMaterieSelectata);
        onChange();
    };

    return (
        <div className="materie-dropdown-items">
            <label>Selectează materia:</label>
            <select className="materie-dropdown" value={materieSelectata} onChange={handleMaterieChange} >
                <option value="">Toate materiile</option>
                {materii.map((materie) => (
                    <option key={materie.materie} value={materie.materie}>
                        {materie.materie}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default MaterieDropdown;
