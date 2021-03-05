const bodyParser = require('body-parser')
const express = require('express')
const app = express()

//sirva os arquivos estaticos da pasta atual
app.use(express.static('.'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// multer eh para fazer upload de arquivos, 
// tratar multi n sei oq forms
const multer = require('multer')

// definindo onde vai salvar e qual o nome do arquivo salvo via upload
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('ocorreu um erro')
        }
        res.end('concluido com sucesso')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    // req.body
    // req.query (?bla)
    // req.params (/:bla)
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Executando...'))
