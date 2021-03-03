function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) // aceita soh 1 param
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'que lecau')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) // pega erro da promise (reject)

console.log('log depois da promise');