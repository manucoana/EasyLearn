import React from "react";

const InputImagineProfil = ({ imageUrl, handleFileUpload }) => {
    
  return (
    <div className="input-imagine-profil">
      {imageUrl && <img src={imageUrl} alt="Profil" />}
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
};

export default InputImagineProfil;