// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
});
console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'Borracha'; //modificar pode
delete produto.tag; // remover também
produto.descricao = 'Borracha escolar branca'; // mas adicionar nao
console.log(produto);

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva'; // nao pode adicionar
delete pessoa.nome; // nem remover
pessoa.idade = 29; // mas pode modificar
console.log(pessoa);

// Object.freeze = selado + valores constantes
// Object.freeze = sealed + writable = false