function verificarNumeroPrimo(n){
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(`0 é primo? ` + verificarNumeroPrimo(0));
console.log(`1 é primo? ` + verificarNumeroPrimo(1));
console.log(`2 é primo? ` + verificarNumeroPrimo(2));
console.log(`3 é primo? ` + verificarNumeroPrimo(3));
console.log(`7 é primo? ` + verificarNumeroPrimo(7));
console.log(`83 é primo? ` + verificarNumeroPrimo(83));
console.log(`100 é primo? ` + verificarNumeroPrimo(100));
console.log(`991 é primo? ` + verificarNumeroPrimo(991));
console.log(`104729 é primo? ` + verificarNumeroPrimo(104729));
console.log(`14348907 é primo? ` + verificarNumeroPrimo(14348907));
