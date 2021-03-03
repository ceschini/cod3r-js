const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function (erro, conteudo) { // assincrono
            resolve(conteudo.toString())
        })
        console.log('depois de ler');
    })
}

lerArquivo(caminho).then(console.log)