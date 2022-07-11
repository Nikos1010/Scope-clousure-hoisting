<h1 align="center">
		Examples
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
