import React, { useState } from "react";
import { Login } from "./Login";
import Elev from "../utilizator/elev/menu/Elev";
import Profesor from "../utilizator/profesor/menu/Profesor";

const LoginHandler = ({ userData }) => {

  const tipUtilizatorElev = "Elev";
  const tipUtilizatorProfesor = "Profesor";

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tipUtilizator, setTipUtilizator] = useState(null);

  const handleLogin = (type) => {
    setIsLoggedIn(true);
    setTipUtilizator(type);
  };

  return (
    <div className="login-handler">
      {!isLoggedIn ? (
        <Login userData={userData} onLogin={handleLogin} />
      ) : (
        <>
          {tipUtilizator === tipUtilizatorElev ? (
            <Elev userData={userData} />
          ) : tipUtilizator === tipUtilizatorProfesor(
            <Profesor userData={userData} />
          )}
        </>
      )}
    </div>
  );
};

export default LoginHandler;
