import FilterByCity from "./FilterByCity";
const Filter = (props) => {
  return (
    <form action="" onSubmit={props.handleForm}>
      <FilterByCity
        handleSearchCity={props.handleSearchCity}
        userCityValue={props.userCity}
      ></FilterByCity>
    </form>
  );
};
export default Filter;
