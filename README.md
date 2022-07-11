<p align="center">
  <h1>Examples<h1>
</p>
    
Encontraremos ejemplos del Scope, Hoisting y Closure, cosas importantes que se deben conocer para ser un desarrollador de JavaScript.

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

showFood(); //Rice
```
## Closure

## Hoisting
