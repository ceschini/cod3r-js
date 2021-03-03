// tagged templates - processa o template dentro de uma funcao
function tag(partes, ...valores) {
    console.log(partes);
    console.log(valores);
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
// valores = interpolacoes
// partes = resto da string
console.log(tag`${aluno} está ${situacao}.`);