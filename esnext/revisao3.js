// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj)) // array de valores
console.log(Object.entries(obj)) // matriz chave valor

// Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Oi'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal { }
class Cachorro extends Animal {
    latir() {
        return 'au au!'
    }
}

console.log(new Cachorro().latir())