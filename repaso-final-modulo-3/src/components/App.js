import "../styles/App.scss";
import dataAPI from "../services/Api.js";
import UserList from "./UserList.js";
import Filter from "./Filter.js";

import { useEffect, useState } from "react";

function App() {
  // ---------------------------------------VARIABLES ESTADO----------------------------------------------------
  const [userData, setUserData] = useState([]);
  const [userCity, setUserCity] = useState("");
  // ----------------------------------------USE EFFECT---------------------------------------------------------------
  useEffect(() => {
    dataAPI().then((dataResults) => {
      setUserData(dataResults);
    });
  });
  // -------------------------------------FUNCIONES HANDLER--------------------------------

  const handleSearchCity = (value) => {
    setUserCity(value);
  };
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR
  // RETURN
  return (
    <div className="App">
      <h1>Directorio de personas</h1>
      <Filter
        handleForm={handleForm}
        handleSearchCity={handleSearchCity}
        userCityValue={userCity}
      ></Filter>
      <UserList userData={userData}></UserList>
    </div>
  );
}

export default App;
