Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

console.log('Meu forEach');
aprovados.forEach2(function (elemento, indice) {
    console.log(`${indice + 1}) ${elemento}`)
})
console.log('forEach original');
aprovados.forEach(function (elemento, indice) {
    console.log(`${indice + 1}) ${elemento}`)
})