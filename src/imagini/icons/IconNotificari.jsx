import React from 'react';
import "./IconNotificari.css"

const IconNotificari = ({  deschideNotificare }) => {
  return (
    <div className='icon-notificari' onClick={deschideNotificare}>
      <p7>Notificari</p7>
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="30" viewBox="0 0 35 35">
        <path id="Icon_material-notifications-active" data-name="Icon material-notifications-active" d="M12.787,6.586l-2.51-2.567a18.839,18.839,0,0,0-7.232,14.09H6.556A15.244,15.244,0,0,1,12.787,6.586ZM34.534,18.109h3.511a18.954,18.954,0,0,0-7.232-14.09L28.321,6.586a15.335,15.335,0,0,1,6.214,11.523Zm-3.458.9c0-5.51-2.879-10.123-7.9-11.344V6.442a2.634,2.634,0,1,0-5.266,0V7.663c-5.038,1.221-7.9,5.815-7.9,11.344v8.974L6.5,31.571v1.795H34.587V31.571l-3.511-3.59ZM20.545,38.75a3.009,3.009,0,0,0,.7-.072,3.581,3.581,0,0,0,2.528-2.118,3.675,3.675,0,0,0,.263-1.4H17.017A3.576,3.576,0,0,0,20.545,38.75Z" transform="translate(-3.045 -3.75)" fill="#fff"/>
      </svg>
    </div>
  );
};

export default IconNotificari;
