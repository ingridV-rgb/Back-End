//atividade 1: Crie um programa que declare duas variáveis e exiba o resultado da soma, subtração, multiplicação e divisão desses números.


let numero = 50
let numero2 = 10

console.log(`${numero} + ${numero2} = ${numero+numero2}`);
console.log(`${numero} - ${numero2} = ${numero-numero2}`);
console.log(`${numero} X ${numero2} = ${numero*numero2}`);
console.log(`${numero} / ${numero2} = ${numero/numero2}`);

//atividade 2: Declare duas idades e utilize operadores de comparação para verificar se uma pessoa é mais velha que a outra.

let idade = 17
let idade2 = 87

let resultado = idade<idade2 ? "o segundo é mais velho" : "o primeiro é mais velho"
console.log(resultado);

//atividade 3: Crie uma variável idade com um número e use o operador ternário para verificar se o valor armazenado na variável é maior ou igual a 18. Imprima “Maior de idade” ou “Menor de idade”

let idad = 3;

let barragem = idad >= 18 ? "maior de idade" : "menor de idade";
console.log(barragem);

//atividade 4: Crie uma variável com um número e use o operador ternário para verificar se é par ou ímpar.

let nm = 50;

let ababa = nm%2 == 0? "número par" : "número ímpar";
console.log(ababa);
