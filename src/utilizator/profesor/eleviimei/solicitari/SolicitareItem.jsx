import React from 'react';
import TextReutilizabil from '../../../../elemente/text/TextReutilizabil';

const SolicitareItem = ({ userName, onAccept, onReject }) => (
    <li className='solicitare-lv'>
        <TextReutilizabil className="text-mic" text={`${userName} a trimis o cerere de colaborare`} />
        <div>
            <button onClick={onAccept}>Accepta</button>
            <button onClick={onReject}>Respinge</button>
        </div>
    </li>
);

export default SolicitareItem;
