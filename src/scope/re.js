var firstName; //undefined
firstName = 'Nico';
console.log(firstName);

var lastName = 'Monte';
lastName = 'Barra'; //Re asignar
console.log(lastName);

var secondName = 'Juan';
var secondName = 'Julian'; //Re declarar
console.log(secondName); 

//Let
let fruit = 'Apple'; //Declarar y asignar
fruit = 'Orange'; //Reasignar
console.log(fruit);

// let fruit = 'Banana'; //Error, no se puede redeclarar

//Const
const animal = 'Dog';
// animal = 'Cat'; //Reasignar - Error
console.log(animal);

const vehicles = [];
vehicles.push("Chevrolet");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);