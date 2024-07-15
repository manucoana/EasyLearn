import React, { useState } from "react";
import ElevulMeuList from "./ElevulMeuList";
import IncarcareMaterial from "../utilizator/profesor/eleviimei/incarcare/IncarcareMaterial";

const EleviList = ({ eleviInscrisi, userData }) => {
    const [selectedElev, setSelectedElev] = useState(null);

    const handleSelectElev = (elev) => {
        setSelectedElev(elev);
    };

    return (
        <div className="elevul-meu-list-container">
            <ElevulMeuList eleviInscrisi={eleviInscrisi} userData={userData} onSelectElev={handleSelectElev} />
            {selectedElev && (
                <div className="full-screen-container">
                    <IncarcareMaterial
                        idElev={selectedElev.id_elev}
                        userData={userData}
                        elevData={selectedElev.elevData || {}}
                        numeElev={selectedElev.detalii_elev.nume}
                        numeProfesor={userData.nume}
                    />
                </div>
            )}
        </div>
    );
};

export default EleviList;
