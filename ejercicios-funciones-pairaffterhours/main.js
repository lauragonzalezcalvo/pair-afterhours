'use strict';

/*
1 - Seleccionar elementos del HTML(querySelector inputs de producto y precio)
2 - Hacer un evento del boton agregar.
3 - Recoger valores de los inputs y pintarlos.

*/

const inputProduct = document.querySelector ('.js-text');
const inputPrice = document.querySelector('.js-price');
const Total = document.querySelector('.js.total');
const addBtn = document.querySelector ('.js-btn');
const listElement = document.querySelector ('.js-list');

//pintamos en el HTML los inputs



//recogemos los valores input
function addInputsValues(event) {
    event.preventDefault();
    
    const productValue = inputProduct.value;
    const priceValue = parseInt(inputPrice.value);
    paintInputs (priceValue,productValue);
    
}
function paintInputs (price,product){
    listElement.innerHTML += `<li>Producto: ${product} - Precio: ${price}</li>`
    console.log('funciona');
}


addBtn.addEventListener('click',addInputsValues);


//falta sumarle el precio


// function saludar(nombre) {
//     return "hola" + nombre ;
// }
// saludar("Carlos");

// console.log(saludar(nombre));