// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj));
console.log(Object.entries(obj)); // matriz chave valor

// Melhorias na Notacao Literal
const nome = 'Carla'
const pessoa = {
    // Antigamente
    nome: nome,
    ola: function () {

    },
    // Agora
    nome,
    ola() {
        return 'disse oi'
    }
}

console.log(pessoa.nome, pessoa.ola());

// Class
class Animal { }
// heranca por prototipo
class Cachorro extends Animal {
    falar() {
        return 'wof wof!'
    }
}

console.log(new Cachorro().falar());