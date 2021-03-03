// com promise...
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}

let nomes = []

// uma promise dentro da outra
// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`))
//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`))
//             console.log(nomes);
//         })
//     })
// })

// 3 requests no mesmo tempo, mais rapido
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas)) // espalhando os arrays das turmas
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message)) // importante sempre ter tratamento de erros


getTurma('D').catch(e => console.log(e.message))