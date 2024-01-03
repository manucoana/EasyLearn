import React from 'react';

const MeniuIcon = ({ toggleMenu }) => {
  return (
    <div onClick={toggleMenu}>
      <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 70.901 60.1">
        <g id="Icon_feather-menu" data-name="Icon feather-menu" transform="translate(2.5 2.5)">
          <path
            id="Path_6"
            data-name="Path 6"
            d="M4.5,18H70.4"
            transform="translate(-4.5 9.549)"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
          />
          <path
            id="Path_7"
            data-name="Path 7"
            d="M4.5,9H70.4"
            transform="translate(-4.5 -9)"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
          />
          <path
            id="Path_8"
            data-name="Path 8"
            d="M4.5,27H70.4"
            transform="translate(-4.5 28.1)"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
          />
        </g>
      </svg>
    </div>
  );
};

export default MeniuIcon;
