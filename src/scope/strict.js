"use strict";
pi = 3.1416; //Error por el use strict
console.log(pi);

function myFunction(){
    "use strict";
    return pi = 3.1416; //Error
}

console.log(myFunction());