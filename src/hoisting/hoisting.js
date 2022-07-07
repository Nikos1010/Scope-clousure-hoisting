//Elevar las declaraciones

console.log(firstName); //Error por la Temporal Dead Zone
let firstName = 'Nicolas';

//Var es diferente
/* var color; // undefined */
console.log(color); //Sube la declaracion de la variable
var color = 'Green';

// var cat; //undefined
// function nameOfCat() {
//     console.log(`EL nombre del gato es ${cat}`); //Undefined
// }
nameOfCat();

function nameOfCat() {
    console.log(`EL nombre del gato es ${cat}`); //Undefined
}

var cat = 'Tyler';

//Error
nameOfCat();

function nameOfCat() {
    console.log(`EL nombre del gato es ${cat}`); //Error cat is not defined
}

let Alimento = function (comida) {
    this.comida = comida;
};

Alimento.prototype.comerHoy = () => console.log('Hoy toca comer:', this.comida);
const alimento = new Alimento('ensalada');

alimento.comerHoy();