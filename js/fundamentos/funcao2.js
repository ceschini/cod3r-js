// Armazenando uma funcao em uma variavel/constante
const imprimirSoma = function (a, b) {
    console.log(a + b);

}

imprimirSoma(2, 3);

// Armazenando uma funcao arrow em uma variavel/constante
const soma = (a, b) => {
    return a + b;
}

console.log(soma(2, 3));

// retorno implícito
const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3));

const imprimir2 = a => console.log(a);
imprimir2('Show');

const teste = function () {
    return 'ok';
}

console.log(teste());
// vai dar erro pq não pode mudar const, se for 'function', 'let' ou 'var' pode mudar
teste = () => {
    return 'okkee';
}
console.log(teste());
