// exercicio 1
import readLine from 'readline-sync';
let dia = Number(readLine.question("informe o dia da semana"));

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terceira-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
            console.log("Sexta-feira");
            break;
    case 7:
        console.log("Sábado");
        break;

    default:
        console.log("Valor inválido! \nInforme o valor no intervalo de 1-7.")
        break;
}

// exercicio 2
import readLine from 'readline-sync';
let mes = Number(readLine.question("informe o mês"));

switch (dia) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
            console.log("Junho");
            break;
    case 7:
        console.log("Julho");
        break;
    case 8:
            console.log("Agosto");
            break;
    case 9:
            console.log("Setembro");
            break;
    case 10:
             console.log("Outubro");
            break;
    case 11:
            console.log("Novembro");
            break;
    case 12:
            console.log("Dezembro");
            break;


    default:
        console.log("Valor inválido! \nInforme o valor no intervalo de 1-12.")
        break;
}

// exercicio 3

let x = readLine.questionFloat("Informe o primeiro valor: ")
let y = readLine.questionFloat("Informe o segundo valor: ")
let op = readLine.questionInt("Escolha a opção \n[1] Soma \n[2] Subtração \n[3] Multiplicação \n[4] Divisão")

switch (op) {
    case 1:
        console.log(`${x} + ${y} = ${x+y}`);
        break;
    case 2:
        console.log(`${x} - ${y} = ${x-y}`);
        break;
    case 3:
        console.log(`${x} * ${y} = ${x*y}`);
        break;
    case 4:
            console.log(`${x} / ${y} = ${x/y}`);
            break;
    default:
        console.log("Opção inválida!")
        break;
}

// exercicio 4
let salario = readLine.quentionFloat("informe seu salário: ");
let cat = readLine.question("Informe e categoria de bonificação: ").toUpperCase();
let bonus = 0

switch (cat) {
    case 'A':
        bonus = salario * 0.05;
        console.log(`${salario+bonus.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`);
        break;

    case 'B':
            bonus = salario * 0.10;
            console.log(`${salario+bonus.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`);
            break;
    case 'C':
            bonus = salario * 0.15;
            console.log(`${salario+bonus.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`);
            break;
    case 'D':
        bonus = salario * 0.20;
        console.log(`${salario+bonus.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`);
        break;
    default:
        console.log("categoria inválida!");
        break;
}