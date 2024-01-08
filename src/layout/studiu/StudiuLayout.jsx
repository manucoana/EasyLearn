import React from 'react';
import "./StudiuLayout.css"


const StudiuLayout = ({ items, title }) => {
    return (
      <div className="studiu-layout">
        <h2 className="titlu-sectiune">{title}</h2>
        <ul className="list-view">
          {items.map((item, index) => (
            <li key={index} className="list-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default StudiuLayout;
