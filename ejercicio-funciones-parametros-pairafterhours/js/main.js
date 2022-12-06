'use strict';


// Fase 1
// Vamos a crear un repo por persona, y vamos a hacer una función que escriba patata 10 veces en la consola la función se llamará ten()

// Fase 2
// Ahora tenemos una función que nos escribe patata 10 veces en la consola cada vez que la llamemos, pero eso, dentro de lo que cabe, es poco útil porque ahora que sé que puedo escribir una palabra 10 veces en la consola lo que me gustaría es poder escribir palabras diferentes.

// Entonces, vamos a modificar nuestra función ten() para que acepte un parámetro word, y vamos a llamar a la función 3 veces, pasándole cada vez una palabra diferente:

// ten('Patata`);
// ten('Aguacate`);
// ten('Pizza');

const potatoesText = document.querySelector('.js-potatoes');
const potatoesList = document.querySelector('.js-potatoesList');

//funcion con un solo li, todos los potatoes nos salen en un mismo li

// function drawPotatoes(){

//    for(let i= 0; i <10 ; i++){
//     console.log('patatas'+ i);
//     potatoesText.innerHTML += 'patatas'+ i;
// }

// }
// console.log(drawPotatoes());

//fase 2
//bucle basico para crear varios li para cada potato.


const foodArray = ['pizza', 'patata', 'aguacate'];


function drawPotatoes(){
    // potatoesList.innerHTML = '';
//    for(let i= 0; i <10 ; i++){
//     console.log(foodArray);z
//     // potatoesList.innerHTML += `<li>${foodArray}</li>`
//    }
for (const foodArray of foodArray){
    console.log(foodArray);
}
}




console.log(drawPotatoes());

//bucle for...of
//No tiene sentido hacerlo











// funciones/bucles de ejemplo
// function handleReset2(event) {
//     event.preventDefault();
//     for (const input of inputsToReset) {
//       input.value = "";
//     }
//   }
  
//   function handleReset3(event) {
//     event.preventDefault();
//     for (let i = 0; i < inputsToReset.length; i++) {
//       inputsToReset[i].value = "";
//     }
//   }