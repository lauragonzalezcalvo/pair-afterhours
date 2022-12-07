import UserItem from "./UserItem";
// Probar a hacer el destructing
const userList = (props) => {
  const userElement = props.userData.map((user) => {
    return (
      <UserItem
        id={user.id}
        image={user.image}
        firstName={user.name.first}
        lastName={user.name.last}
        city={user.city}
        gender={user.gender}
      ></UserItem>
    );
  });
  return (
    <section>
      <ul>{userElement}</ul>
    </section>
  );
};
export default userList;
