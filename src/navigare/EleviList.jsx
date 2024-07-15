import React, { useState } from "react";
import IncarcareMaterial from "../utilizator/profesor/eleviimei/incarcare/IncarcareMaterial";
import ElevulMeuList from "./ElevulMeuList";
import PaginaEmpty from "../utilizator/elev/studiu/principal/PaginaEmpty";

const EleviList = ({ eleviInscrisi, userData, activePage }) => {
    const [selectedElev, setSelectedElev] = useState(null);

    const handleSelectElev = (elev) => {
        setSelectedElev(elev);
    };

    return (
        <div className="elevul-meu-list-container">
            <ElevulMeuList eleviInscrisi={eleviInscrisi} userData={userData} onSelectElev={handleSelectElev} />
            {!selectedElev && <PaginaEmpty />}
            {selectedElev && activePage !== "Mesaje" && (
                <div className="full-screen-container">
                    <IncarcareMaterial idElev={selectedElev.id_elev} userData={userData} elevData={selectedElev.elevData || {}} numeElev={selectedElev.detalii_elev.nume} numeProfesor={userData.nume} />
                </div>
            )}
        </div>
    );
};

export default EleviList;
