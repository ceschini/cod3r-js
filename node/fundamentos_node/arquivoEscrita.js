const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    // se nao deu erro err = null = false entao vai logar arquivo salvo
    console.log(err || 'Arquivo salvo')
})