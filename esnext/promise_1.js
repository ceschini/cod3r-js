function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

function paraMinuscula(letra) {
    return letra.toLowerCase()
}

let p = new Promise(function (resolve) {
    resolve(['Ana', 'Bruna', 'Carlos', 'Daniel'])
}).then(primeiroElemento)
    .then(primeiraLetra)
    .then(paraMinuscula)
    .then(console.log)