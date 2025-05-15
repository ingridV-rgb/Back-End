// atividade 01
let Apartamento = {
    quartos: 2,
    tipo: 'apartamento',
    endereco: 'Avenida Principal, 456 - Centro',
    andar: 7
}

console.log(`${Apartamento.tipo} com ${Apartamento.quartos} quartos, localizado na ${Apartamento.endereco}, com ${Apartamento.andar} andares.`)

// atividade 02

let produtoEmbalado = {
    nome: 'Laptop HP',
    categoria: 'Eletrônicos',
    peso: 1.5,
    preco: 3500
}

console.log(`o produto ${produtoEmbalado.nome}, da categoria ${produtoEmbalado.categoria}, pesa ${produtoEmbalado.peso} está a venda por ${produtoEmbalado.preco.toLocaleString('pt-BR', {style:"currency", currency: "BRL"})}.`);

// atividade 03

class Imovel {
    constructor(quartos, tipo, endereco){
    this.quartos = quartos;    
    this.tipo = tipo;
    this.endereco = endereco;
    }
    exibirInformacoes(){
        return `${this.tipo} com ${this.quartos} quartos, localizado(a) na ${this.endereco}.`;
    }
}

let casa = new Imovel(3,'Sobrado', 'Rua das dores, bairro programador, n° 1010'); //criando um novo objeto apartir de uma classe (apartir do Imovel)
console.log(casa.exibirInformacoes());

let ap = new Imovel(2, 'Apartamento', 'Rua da depressão, bairro da solidão, n° 666');
console.log(ap.exibirInformacoes());

//casa.quartos = 2;
//casa.tipo = 'Sobrado';
//casa.endereco = 'Centro';
//console.log(`Quartos: ${casa.quartos} \nTipo: ${casa.tipo} \nEndereço: ${casa.endereco}`)

// atividade 04

class Veiculo {
    constructor(marca, ano, modelo){
    this.marca = marca;    
    this.ano = ano;
    this.modelo = modelo;
    }
    exibirDetalhes(){
        return `Veículo da marca ${this.marca}, ano ${this.ano}, modelo ${this.modelo}.`;
    }
}

let carro = new Veiculo('Toyota', 2022, 'Corolla'); //criando um novo objeto apartir de uma classe (apartir do Imovel)
console.log(carro.exibirDetalhes());

let moto = new Veiculo('Honda', 2021, 'CBR 600RR');
console.log(moto.exibirDetalhes());
