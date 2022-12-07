const UserItem = (props) => {
  return (
    <li>
      <a href={props.id}>
        <img
          src={props.image}
          alt={`Foto de ${props.firstName}`}
          title={`Foto de ${props.firstName}`}
        />
        <h4>
          {`${props.firstName}
        ${props.lastName}`}
        </h4>
        <p>
          {props.city}/{props.gender}
        </p>
      </a>
    </li>
  );
};
export default UserItem;
