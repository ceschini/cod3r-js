console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1 // funciona para adicionar props
exports.b = 2 // funciona para adicionar props
module.exports.c = 3 // funciona para adicionar props

exports = null
console.log(module.exports)

exports = { // nao funciona para objetos
    nome: 'Teste'
}

console.log(module.exports);

module.exports = { publico: true }