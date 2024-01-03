import React from "react";
import student from "./student.png";
import "./LogoComponent.css";


const LogoComponent = () => {
  return (
    <div className="logo-container">
       <img className="imagine-student" src={student} alt="Student" />
    </div>
  );
};

export default LogoComponent;
