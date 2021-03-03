// operador .. rest(juntar)/spread(espalhar)
// usar rest como parametro de funcao

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }

// copiando todos atribs de funcionario e espalhando dentro do obj
const clone = { ativo: true, ...funcionario }
console.log(clone);

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal);