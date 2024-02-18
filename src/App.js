import React from "react";
import "./App.css";

import Homepage from "./homepage/Homepage";

const App = (userData) => {
  return (
    <div className="App">
      <Homepage userData={userData}/>
    </div>
  );
};

export default App;
