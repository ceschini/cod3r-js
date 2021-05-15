// cria um novo array com todos os elementos que passaram no teste
// implementado pela função fornecida

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plastico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function (p) {
    return p.preco > 500
}));

const isCaro = (e) => e.preco >= 500
const isFragil = (e) => e.fragil

const produtosFiltrados = produtos.filter(isCaro).filter(isFragil)
console.log(produtosFiltrados);