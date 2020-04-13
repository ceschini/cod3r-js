const nome = 'Rebeca';
const concatenacao = 'Olá' + nome + '!';

//template string faz interpolação
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template);

// expressoes
console.log(`1 + 1 = ${1 + 1}`);

// template string pode chamar funcoes

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);