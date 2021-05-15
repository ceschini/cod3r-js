class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa('João');
p1.falar();

// ----------------------------------------------
function PessoaConstrutora(nome = 'Anon') {
    this.falar = function () {
        console.log(`Meu nome é ${nome}`)
    }
}

const p2 = new PessoaConstrutora();
const p3 = new PessoaConstrutora('Mario');
p2.falar();
p3.falar();