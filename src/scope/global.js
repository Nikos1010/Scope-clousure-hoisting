//Variables
var a; //Declarar
var b = 'b'; // Declarar y aseignar
b = 'bb'; //Reasignar
var a = 'aa'; // Redeclarar

//Global Scope
var fruit = 'Apple';
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Colombia'; //Si no se declara la variable se crea una variable global
    console.log(country);
}

countries()
console.log(country);