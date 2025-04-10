//atividade 1

let nome = "Ingrid";
let idade = 76;

console.log("Olá meu nome é "+ nome +" e eu tenho "+ idade +" aninhos "); // concatenação: converte o valor dentro da variável para string #mais fácil
// console.log(`Olá meu nome é ${nome}, e eu tenho ${idade}, aninhos`); // interpolação: também converte o valor para string

//atividade 2


let texto = "Olá meu nome é "+ nome +" e eu tenho "+ idade +" aninhos";

console.log(texto.toLowerCase());
console.log(texto.toUpperCase());

//atividade 3

console.log(typeof idade);

//atividade 4

let peso = 70;
let altura = 1.75;
let imc = (peso / (altura * altura)).toFixed(2);
console.log(`Seu IMC é: ${imc}`);