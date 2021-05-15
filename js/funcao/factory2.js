function criarProduto(nome, preco) {
    return {
        nome, // não precisa pq nome do param = nome atrib
        preco: preco,
        desconto: 0.1
    }
}

const p1 = criarProduto();
console.log(p1);

console.log(criarProduto('Bola', '20'));