// no objeto chave = string
// no Map qualquer coisa
const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framwork: true })

console.log(tecnologias.react);
console.log(tecnologias.get('react').framework);

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'Número')
chavesVariadas.set(123, 'Número 2')
console.log(chavesVariadas)