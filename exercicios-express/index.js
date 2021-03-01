const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
require('./api/produto')(app, 'com param!')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

// tratando dados obtidos no body
app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// funcao que retorna uma funcao middleware
app.use(saudacao('joao'))

// use eh aplicado a qualquer metodo http
app.use((req, res, next) => {
    console.log('antes');
    next()
})

// CUIDADO: A ordem importa
// acessando parametros com query
app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    // tratando envio no body manualmente
    // let corpo = ''
    // req.on('data', function (parte) {
    //     corpo += parte
    // })

    // req.on('end', function () {
    //     res.send(corpo)
    // })

    // usando bodyparser
    res.send(req.body)
})

// :id eh um parametro variavel
app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})


app.get('/opa', (req, res, next) => {
    console.log('durante');
    // res.send('<h1>respondendo html</h1>')

    // res.json({ // respondendo json
    //     name: 'Ipad',
    //     preco: 1899.00,
    //     desconto: 0.5
    // })

    // res.json([ // respondendo array
    //     { id: 7, name: 'Ana', position: 1 },
    //     { id: 34, name: 'Bia', position: 2 },
    //     { id: 73, name: 'Carlos', position: 3 }
    // ])

    res.json({
        data: [ // dados
            { id: 7, name: 'Ana', position: 1 },
            { id: 34, name: 'Bia', position: 2 },
            { id: 73, name: 'Carlos', position: 3 }
        ],
        // infos adicionais
        count: 30, //qntos registros na base
        skip: 0, //qntas paginas ja pulou
        limit: 3, //pegar os 3 primeiros
        status: 200
    })

    next()
})

app.use((req, res) => {
    console.log('depois');
})

app.listen(3000, () => {
    console.log('backend executando...');
})