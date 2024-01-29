import React from 'react';
import "./StudiuLayout.css";
import TextReutilizabil from "../../elemente/text/TextReutilizabil";

const StudiuLayout = ({ titlu }) => {

  return (
    <div className="studiu-layout">
      {titlu &&
        <TextReutilizabil className="text-subtitlu-albastru" text={titlu} />
      }
    </div>
  );
};

export default StudiuLayout;
