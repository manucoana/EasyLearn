import React, { useState } from "react";
import { Login } from "./Login";
import Elev from "../elev/Elev";
import Profesor from "../profesor/Profesor";

const LoginHandler = () => {

  const userTypeElev = "Elev";
  const userTypeProfesor = "Profesor";

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null);

  const handleLogin = (type) => {
    setIsLoggedIn(true);
    setUserType(type);
  };

  return (
    <div className="login-handler">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          {userType === userTypeElev ? (
            <Elev userType={"Elev"} />
          ) : userType === userTypeProfesor(
            <Profesor userType={"Profesor"} />
          )}
        </>
      )}
    </div>
  );
};

export default LoginHandler;
