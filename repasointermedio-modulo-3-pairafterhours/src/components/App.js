import "../styles/App.scss";
import contacts from "../data/contacts.json";
import { useState } from "react";

function App() {
  // ----------------------------VARIABLES ESTADO------------------------------------
  // con esta variable estadoo nos traemos contacts
  const [data, setData] = useState(contacts);
  // para recoger el valor de el input de búsqueda creamos esta variable estado
  const [search, setSearch] = useState("");
  //para rellenar el objeto relleno por la usuaria que vamos a pintar en el html , ponemos useState(name...)
  const [newContact, setNewContact] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
  });

  //------------------------------------FUNCIONES--------------------------------

  const handleSearch = (ev) => {
    ev.preventDefault();
    setSearch(ev.target.value);
    // por que no funciona
    /*
  const paintSearchedContacts = data.filter ((contact) => {
  return contact.name.toLowerCase().includes(search.toLowerCase())
  return(paintSearchedContacts)
  })
 */
  };

  // en esta funcion solo recogemos los valores de los inputs para que aparezcan pintado en nuestra variable estado de components
  const handleNewContact = (ev) => {
    ev.preventDefault();
    //const inputValue = ev.target.value;
    // sin el spread no aparecen en componentes todas las propiedades del objeto
    //importante poner el evento en todos los inputs del html

    // ponemos el .id ya que coinciden todos los id de los inputs con la propiedad de mi objeto
    // si el id por ejemplo de name se lo cambiamos a id= pepino, nos añade una nueva propiedad que se llama pepino, y tiene como valor lo que escribimos en el input de name
    // los corchetes: no significa que sea un array es solo para meternos en la propiedad de ese input, en este caso.
    setNewContact({ ...newContact, [ev.target.id]: ev.target.value });
  };

  const handleClick = (ev) => {
    ev.preventDefault();

    // setData la llamamos para modificar nuestra variable estado que es data.Le queremos añadir un nuevo contacto entonces, le ponemos los corchetes porque es un array, es diferente a los corchetes de ev.target.id. Utilizamos el spread para que no se borren los datos anteriores al colocar un nuevo contacto. newContact está guardado en nuestra variable de estado y la llamamos porque es el array que vamos a rellenar.
    setData([...data, newContact]);

    // Hay otro modo de hacerlo con push

    /*

  data.push(newContact);
  setData([...data]);
  setNewContact({
    name: '',
    lastname: '',
    phone: '',
    email: '',
  });

  */
  };

  // ------------------------------------VARIABLES----------------------------

  // de nuestra variable vamos a hacer un filter y un map de data que es la que guarda lo que traemos de contacts
  const paintContacts = data

    .filter(
      (contact) => contact.name.toLowerCase().includes(search.toLowerCase())
      // aquí podemos  || que es un or , para añadir más opciones de búsqueda.
    )

    // pintamos con un map, cada uno de los contactos que estan guardados en nuestro array data
    .map((contact, index) => {
      return (
        <li className="contact__item" key={index}>
          <p className="contact__name">
            <label className="contact__label">Nombre:</label>
            {contact.name} {contact.lastname}
          </p>
          <p className="contact__phone">
            <label className="contact__label">Teléfono:</label>
            <a
              href={`tel: ${contact.phone}`}
              title={`Pulsa aquí para llamar a ${contact.name}`}
            >
              {contact.phone}
            </a>
          </p>
          <p className="contact__mail">
            <label className="contact__label">Email:</label>
            <a
              href={`mailto: ${contact.email}`}
              title={`Pulsa aquí para escribir a ${contact.name}`}
            >
              {contact.email}
            </a>
          </p>
        </li>
      );
    });

  return (
    <div className="page">
      {/* header */}
      <header className="header">
        <h1 className="header__title">Mi agenda de contactos</h1>
        <form>
          <input
            className="header__search"
            autoComplete="off"
            type="search"
            name="search"
            placeholder="Filtrar contactos por nombre"
            onInput={handleSearch}
            value={search}
          />
        </form>
      </header>

      <main>
        {/* contact list */}
        <ul className="contact__list">{paintContacts}</ul>
        {/* new contact */}
        <form className="new-contact__form">
          <h2 className="new-contact__title">Añade un nuevo contacto</h2>
          <input
            className="new-contact__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            onInput={handleNewContact}
            value={newContact.name}
          />
          <input
            className="new-contact__input"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Apellidos"
            onInput={handleNewContact}
            value={newContact.lastname}
          />
          <input
            className="new-contact__input"
            type="phone"
            name="phone"
            id="phone"
            placeholder="Teléfono"
            onInput={handleNewContact}
            value={newContact.phone}
          />
          <input
            className="new-contact__input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onInput={handleNewContact}
            value={newContact.email}
          />
          <input
            className="new-contact__btn"
            type="submit"
            value="Añadir"
            onClick={handleClick}
          />
        </form>
      </main>
    </div>
  );
}

export default App;
