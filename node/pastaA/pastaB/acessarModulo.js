const moduloA = require('../../moduloA') // caminho relativo
const _ = require('lodash') // procura no 'node_modules'
const http = require('http') // modulo interno (core)
const c = require('./pastaC') // procura na pasta o index.js

console.log(moduloA.ola)
console.log(c.ola2)

http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)