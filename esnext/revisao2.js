// Arrow Function - sempre anonima - se tem corpo tem return
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({}) // nao funciona
lexico1()
lexico2()

// parametro default - quando undefined
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Sou mais forte que:')

// operador rest - agrupa parametros em array
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))