import "../styles/App.scss";
import dataAPI from "../services/Api.js";
import UserList from "./UserList.js";

import { useEffect, useState } from "react";

function App() {
  // ---------------------------------------VARIABLES ESTADO----------------------------------------------------
  const [userData, setUserData] = useState([]);
  // ----------------------------------------USE EFFECT---------------------------------------------------------------
  useEffect(() => {
    dataAPI().then((dataResults) => {
      setUserData(dataResults);
    });
  });
  // FUNCIONES HANDLER
  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR
  // RETURN
  return (
    <div className="App">
      <h1>Directorio de personas</h1>
      <UserList userData={userData}></UserList>
    </div>
  );
}

export default App;
