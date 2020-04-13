const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() // invocando func factory
const contadorD = require('./instanciaNova')()

contadorA.inc() // original 1 + 1
contadorA.inc() // cache 2 + 1
// 3 pq o obj esta em cache
console.log(contadorA.valor, contadorB.valor)

contadorC.inc() // 2
contadorC.inc() // 3
// D nao muda pq factory faz instancias novas
console.log(contadorC.valor, contadorD.valor); 