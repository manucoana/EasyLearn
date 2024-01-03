import React, { useState } from "react";
import { Login } from "./Login";
import Student from "../student/Student";

const LoginHandler = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showStudentComponent, setShowStudentComponent] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowStudentComponent(false);
  };

  const handleButtonClick = () => {
    setShowStudentComponent(!showStudentComponent);
  };

  return (
    <div className="login-handler">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        showStudentComponent && <Student />
      )}
    </div>
  );
};

export default LoginHandler;
