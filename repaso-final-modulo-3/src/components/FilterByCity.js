const FilterByCity = (props) => {
  const handleCity = (ev) => {
    props.handleSearchCity(ev.target.value);
  };
  return (
    <>
      <label htmlFor="city">Busca por ciudades </label>
      <input
        type="text"
        id="city"
        name="city"
        value={props.userCityValue}
        onInput={handleCity}
        // {/*Por qué si lo llamamos userCityValue nos deja escribir en el input y si lo llamamos igual no userCity*/}
      ></input>
      {/* Si es un botón le ponemos un evento onSubmit si le ponemos un onChange, se rompe */}
      <button onClick={handleCity} type="button">
        Buscar
      </button>
    </>
  );
};
export default FilterByCity;
