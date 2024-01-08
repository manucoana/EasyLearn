import React, { useState } from "react";
import { Login } from "./Login";
import Student from "../student/Student";
import Profesor from "../profesor/Profesor";

const LoginHandler = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="login-handler">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          {userType === "Elev" ? (
            <Student />
          ) : userType === "Profesor" (
            <Profesor />
          )}
        </>
      )}
    </div>
  );
};

export default LoginHandler;
