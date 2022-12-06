const userList = (props) => {
  const userElement = props.userData.map((user) => {
    return (
      <li>
        <a href={user.id}>
          <img
            src={user.image}
            alt={`Foto de ${user.name.first}`}
            title={`Foto de ${user.name.first}`}
          />
          <h4>
            {user.name.first}
            {user.name.last}
          </h4>
          <p>
            {user.city}/{user.gender}
          </p>
        </a>
      </li>
    );
  });
  return (
    <section>
      <ul>{userElement}</ul>
    </section>
  );
};
export default userList;
