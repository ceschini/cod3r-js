// Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa());

const p1 = criarPessoa('João', 'Silva');
console.log(p1);

