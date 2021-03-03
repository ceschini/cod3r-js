// Arrow Function 
// sempre anonimas
// return implicito
const soma = (a, b) => a + b
console.log(soma(2, 3));

// this eh amarrado, sempre aponta pro obj
// funcao tradicional this eh varivavel
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default
function log(texto = 'Node') {
    console.log(texto);
}

log()
log(undefined)
log(null)
log('ganhei do default')

// operador spread / rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

// passou parametros espalhados e o rest '...' agrupou
console.log(total(2, 3, 4, 5));