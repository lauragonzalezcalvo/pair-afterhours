'use strict';
// hemos llamado solo al ultimo objeto del Array, para probar si nos salen los parámetros. Hemos dejado spacShipsAll como variable vacía, para luego rellenarla en la función y pasarlo como parámetro.
const spaceShipsList = document.querySelector ('.js_spaceshipslist');
let SpaceshipsAll = [];

 SpaceshipsAll = [
  {
    "id": "1-93-po",
    "name": "Tardis Blue",
    "from": "Doctor Who",
    "colors": [
      "003A6E",
      "9B9A99",
      "000000",
      "FFFFFF",
      "6F4500"
    ]
  },
  {
    "id": "2-54-ha",
    "name": "Millenium Falcon",
    "from": "Star Wars",
    "colors": [
      "B6B6BE",
      "D8D7D4",
      "413A31",
      "746C66",
      "A32D2C"
    ]
  },
  {
    "id": "3-02-ma",
    "name": "Battlestar Galactica",
    "from": "Battlestar Galactica",
    "colors": [
      "080F19",
      "1B2E3F",
      "364269",
      "3D6973",
      "E5635F"
    ]
  },
  {
    "id": "4-87-mm",
    "name": "Serenity",
    "from": "Firefly",
    "colors": [
      "3C5375",
      "7285A6",
      "96AABF",
      "F1DB7E",
      "0C0C0C"
    ]
  },
  {
    "id": "5-44-sw",
    "name": "Nostromo",
    "from": "Alien",
    "colors": [
      "08070C",
      "F4F3F5",
      "121828",
      "464F75",
      "9ABEF2"
    ]
  }
]
// renderSpaceShip(SpaceshipsAll);
//En la segunda prueba hemos intentado pasarle varios parámetros y funciona, por lo tanto entendemos parámetros.
// en la función se llama al ultimo objeto del array, que tiene la posición 4 . Llamamos a SpaceshipsAll arriba para pasarlo como parametro = oneShip.

//creamos una variable dentro de la función para poder llamarla con return,
function renderSpaceShip(oneShip) { // const oneShip = SpaceShipsAll
  const ship =`<li>
  <article class="spaceship">
    <h3 class="spaceship__title">${oneShip.name}</h3>

    <ul class="spaceship__colorslist">
      <li class="spaceship__color" style="background-color: #${oneShip.colors[0]};"></li>
      <li class="spaceship__color" style="background-color: #${oneShip.colors[1]};"></li>
      <li class="spaceship__color" style="background-color: #${oneShip.colors[2]};"></li>
      <li class="spaceship__color" style="background-color: #${oneShip.colors[3]};"></li>
      <li class="spaceship__color" style="background-color: #${oneShip.colors[4]};"></li>
    </ul>`
    return ship;
}

//bucle que toma los parametros de SpaceshipsAll paras poder pintar todas las naves 
function renderSpaceList(SpaceshipsAll) {
  spaceShipsList.innerHTML = '';
  for (const spaceShipsItem of SpaceshipsAll) {
    spaceShipsList.innerHTML += renderSpaceShip(spaceShipsItem);
  }
}
renderSpaceList(SpaceshipsAll);
// se utilizan las # porque estamos llamando a un color
// estamos pintando sin bucles para entender cómo funcionan los parámetros y si pinta las naves. 

