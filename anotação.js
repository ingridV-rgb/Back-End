//operadores

//aritmético +, -, /, * (adição, subtração, divisão, multiplicação) dá pra concatenar as strings com + --> converte todos os valores pra string e depois une

// se somar 5 + 5 você terá 10. Se você somar 5 + true você vai ter 6, pois true vale 1
// false = 0
//true = 1

//operadores de atribuição: simplificação x = y
//atribuição de adição: x += y, seria a mesma coisa que: x = x + y, dá pra fazer com todos os operadores, é um jeito de simplificar

// incremento = ++
// decremento = --
// são usados para adicionar ou subtrair o valor 1 de uma variável (mais usados em bases de repetição) --> contador++; console.log(contador) #se o contador valer 2, ele vai passar a valer 3
// podem ser colocados antes ou após o nome da variável: antes = pré-incremento primeiro é incrementado e depois impresso na tela
// colocar = pós-incremento primeiro é impresso depois é incrementado == isso se aplica ao -- também

//operadores relacionais: (===) estritamente verdadeiro; retorna verdadeiro caso os operadores sejam iguais ou do mesmo tipo; tipo é igual e se o conteúdo é igual; dará erro se você colocar "21" (string) === 21 (int); dará erro, pois seus tipos são diferentes
// (==) apenas verifica se os valores são iguais
// (--) apenas verifica se os valores são diferentes
// (!==) verifica os dois tipos, se o conteúdo é diferente e se o conteúdo é diferente; é praticamente ao estritamento verdadeiro, só que em false

//undefined = não definido
//null = sem valor

//operadores lógicos: AND lógico (&&) retorna verdadeiro ambos operadores sejam verdadeiros
//OU lógico (||) só retorna verdadeira se as duas opções forem falsas, caso uma das opções forem falsas retornará false #oposto do AND
// NOT (!)

// let idade = 25;
// let mensagem = idade >= 18 ? "acesso permitido" : "acesso negado" #if e else simples

// let: o valor pode ser alterado

// variavel guarda VALOR = tipo primitivo --> passa cópia do valor
// objeto armazena REFERÊNCIA (endereço de onde o objeto foi criado)

//operador new cria um novo objeto --> função construtora; cria um objeto na memória e devolve o endereço na variavel que está sendo declarada: ex= o
// var o = new.Object(); objeto vazio

// this = precisa ser usado para se referir a um parametro especifico| exemplo: this.marca = marca | chama a propriedade

function Carro(marca,modelo){
    this.marca = marca,
    this.modelo = modelo}

let meuCarro = new Carro("Fiat", "Pulse") //passagem como referência na memória --> tecnicamente o mesmo objeto
console.log(`A marca do Carro é ${meuCarro.marca}`)
console.log(`O meu modelo é ${meuCarro.modelo}`)

let moto = {
    cor: "preto"
}

let bicicleta = moto
console.log("moto:" + moto.cor)
console.log("bicicleta:" + bicicleta.cor)
bicicleta.cor = "preto escuro"

console.log("moto:" + moto.cor)
console.log("bicicleta:" + bicicleta.cor)
//aponta para o mesmo objeto na memória, quando muda a cor de algo

//array = coleção de objetos [] --> se tiver colchete é um array
//se tiver {} chave é um objeto

//quando voce cria um novo objeto, voce tá instanciando (instância) um novo objeto na memoria