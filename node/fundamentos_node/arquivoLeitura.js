const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono - cuidado
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo + '\n');

// assincrono - vai executar dps da linha 22!
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    if (err) {
        console.log(`Deu ruim: ${err}`);
    }
    const config = JSON.parse(conteudo)
    console.log(`linha 12: ${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json') // padrao .js por isso .json
console.log(config.db)

// lendo um diretorio
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta');
    console.log(arquivos);
})