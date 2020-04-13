Array.prototype.map2 = function (callback) {
    const result = []
    for (i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this))
    }
    return result
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const result = carrinho.map2(function (e) {
    return JSON.parse(e).preco;
})

console.log(result);