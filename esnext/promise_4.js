function gerarNumerosEntre(min, max, tempo) {
    if (min > max) {
        [max, min] = [min, max] // invertendo as variaveis
    }

    return new Promise(resolve => {
        setTimeout(function () {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            console.log(aleatorio)
            resolve(aleatorio)
        }, tempo)
    })
}

console.time('tempo da promise')
function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500),
    ])
}

gerarVariosNumeros()
    .then(console.log)
    .then(() => console.timeEnd('tempo da promise'))