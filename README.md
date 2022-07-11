<h1 align="center">
		Apuntes
</h1>
Encontraremos ejemplos sobre el scope, hoisting y el closure.
## Scope
Cuando hablamos de Scope, nos referimos al alcance que tiene una variable dentro de un programa.

Hay distintos scope en JS, esta el global scope, function scope y block scope.

### Global Scope
Acá se encuentran ubicadas las variables donde en cualquier archivo JS se puede llamar, desde que estén conectados, son aquellos que en todo el modulo se pueden llamar.
Ej:
```javascript
var food = 'Rice';
console.log(food); // Rice

function showFood() {
   console.log(food);
}
```
### Function Scope
Son las varibales que estan ubicadas y viven dentro de una funcion, ``` var ``` es una variable de scope function, aca un ejemplo:
``` javascript
function greeting() {
    if(true){
		var userName = 'Noith';
    }
	 console.log(`Hello ${userName}!`);
}

greeting(); // Hello Noith
```
Y esto es con let o const:
``` javascript
function greeting() {
    let userName = 'Noith';
	const userEmail = 'noith@correo.com';
    console.log(userName);
	console.log(userEmail);

    if(userName === 'Noith'){
        console.log(`Hello ${userName}!`);
    }
	if(userEmail === 'noith@correo.com'){
		console.log(`Your email is ${userEmail}!`);
	}
}

greeting();
console.log(userName); // Error
console.log(userEmail); // Error
```
### Block Scope
Nos referimos ha alcance de bloque cuando el codigo esta dentro de ``` {} ``` el let y const son variables de alcance de bloque, aca podemos observar un ejemplo:
```javascript
function fruits() {
    if(true){
        var fruit1 = 'Apple'; // Function scope
        let fruit2 = 'Kiwi'; //Block scope
        const fruit3 = 'Banana'; //Block scope
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
    // console.log(fruit2); //Error
    // console.log(fruit3); //Error
}

fruits();
```

## Hoisting
Cuando nos referimos a hoisting o elevacion, es en torno a como se comportan las declaraciones de las variables cuando se ejecuta el programa.
Vamos a observar un ejemplo con var:
```javascript
console.log(name); //undefined
var name = 'Noith';
```
Al escribir este codigo la variable name sube y se asigna undefined, es como si pasara esto:
```javascript
var name;
console.log(name); //undefined
var name = 'Noith';
```
Con let y const:
```javascript
console.log(food); //Error food is not defined
let food = 'Cake';
```
En este caso observamos un error, esto se debe al temporal dead zone, el cual es como funciona Javascript. Javascript lee linea por linea el codigo, si no encuentra la variable en este caso, mostrara un error, aunque se elevan las variables como con var, con let y const no estan inicializadas, por lo tanto muestra un error, entonces el temporal dead zone es ese espacio donde se encuentran las variables sin inicializar, esperando ser llamadas.

## Closure
Los closure es una función que hace referencia a variables en el ámbito externo desde su ámbito interno. Un ejemplo seria este:
```javascript
const moneyBox = (function() {
    let _quantityCoins = 0;
    function saveCoins(coins) {
        console.log(`Total: ${_quantityCoins}`);
        return _quantityCoins += coins;
    }
    return saveCoins;
})();

moneyBox(10); // Total 10
moneyBox(30); // Total 40
moneyBox(5); // Total 45
```
O lo podemos instanciar en varios objetos:
```javascript
const moneyBox = function() {
    let _quantityCoins = 0;
    function saveCoins(coins) {
        console.log(`Total: ${_quantityCoins}`);
        return _quantityCoins += coins;
    }
    return saveCoins;
};
const noithBox = moneyBox();
noithBox(5); // Total 5
noithBox(30);  // Total 35
noithBox(5);  // Total 40

const leroBox = moneyBox();
leroBox(10);  // Total 10
leroBox(3);  // Total 13
leroBox(8);  // Total 21
```
