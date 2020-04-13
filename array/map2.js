const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Exercicio: Retornar um array apenas com os preços

const result = carrinho.map(function (e) {
    return JSON.parse(e).preco;
})

console.log(result);
// Melhor que a solucao do professor ;)