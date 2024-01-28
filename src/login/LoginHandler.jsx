import React, { useState } from "react";
import { Login } from "./Login";
import Elev from "../utilizator/elev/menu/Elev";
import Profesor from "../utilizator/profesor/menu/Profesor";

const LoginHandler = () => {

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
        <Login onLogin={handleLogin} />
      ) : (
        <>
          {tipUtilizator === tipUtilizatorElev ? (
            <Elev tipUtilizator={"Elev"} />
          ) : tipUtilizator === tipUtilizatorProfesor(
            <Profesor tipUtilizator={"Profesor"} />
          )}
        </>
      )}
    </div>
  );
};

export default LoginHandler;
