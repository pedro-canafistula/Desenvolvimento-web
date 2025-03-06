let operacoes = ["adição", "subtração", "multiplicação", "divisão"];

let num1 = 5;
let num2 = 2;
let num3;

function imprimirOperacao(operacao, num1, num2, resultado){
    console.log(`Resultado da ${operacao} entre ${num1} e ${num2} é ${resultado}`)
};

/*
num3 = num1 + num2
imprimirOperacao(operacoes[0], num1, num2, num3);
num3 = num1 - num2
imprimirOperacao(operacoes[1], num1, num2, num3);
num3 = num1 * num2
imprimirOperacao(operacoes[2], num1, num2, num3);
num3 = num1 / num2
imprimirOperacao(operacoes[3], num1, num2, num3);
*/

// Matriz
let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

function imprimirMatriz(matriz){
    for(let i=0; i<matriz.length; i++){
        for(let j=0; j<matriz[i].length; j++){
            process.stdout.write(matriz[i][j]+" ");
        }
        console.log("\n");
    }
};


//imprimirMatriz(matriz);

let capitais = {
    DF: "Brasília",
    DDD_DF: 61,
    SP: "São Paulo",
    DDD_SP: 11,
    RJ: "Rio de Janeiro",
    DDD_RJ: 21
};

console.log(capitais.DF + " - " + capitais.DDD_DF);







