require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Pei' // nao vai pq freezed
console.log(MinhaApp.nome);