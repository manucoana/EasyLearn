import React from 'react';
import ImagineProfil from '../../../comun/profil/imagine/ImagineProfil';

const NumeIconElev = ({ userData, numeElev }) => {
    return (
        <div className='nume-icon-elev'>
            <ImagineProfil userData={userData || {}} />
            <p>{numeElev}</p>
        </div>
    );
};


export default NumeIconElev;
