function greeting() {
    let userName = 'Noith';

    function displayUserName() {
        return `Hello ${userName}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());

const contador = () => {let a = 0; return () => a++}

const contar = contador();
contar();
contar();
contar();
contar();
contar();
console.log(contar());