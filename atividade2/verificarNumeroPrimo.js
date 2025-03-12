function verificarNumeroPrimo(n){
    if (n!=2 && n%2==0) {
        return false;
    }
    return true;
}

primo = verificarNumeroPrimo(0);
print(`0 é primo? {primo}`);