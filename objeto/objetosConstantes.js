// constante aponta pro endereço de memória que contem o obj
// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' };
pessoa.nome = 'Pedro';
console.log(pessoa);

Object.freeze(pessoa); // torna objeto em si constante
pessoa.nome = 'Maria';
pessoa.end = 'Rua ABC'; // tentando adicionar atrib
delete pessoa.nome; // tentando deletar atrib
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: 'Joao' });
pessoaConstante.nome = 'Paulo';
console.log(pessoaConstante);

// pessoa <- 456 <- {...}
// TypeError: Assignment to constant variable.
// pessoa = { nome: 'Ana' };
