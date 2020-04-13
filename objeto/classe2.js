class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome;
    }
}

class Pai extends Avo {
    constructor(sobrenome, nome) {
        super(sobrenome); // chama constructor do Avo
        this.nome = nome;
    }
}

class Filho extends Pai {
    constructor(sobrenome, nome, apelido) {
        super(sobrenome, nome);
        this.apelido = apelido;
    }
}

const filho = new Filho('Billy', 'Wyat', 'The kid');
console.log(filho);
