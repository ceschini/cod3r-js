function saudacao(nome) {
    return function (req, res, next) {
        // ideal executar aqui dentro 
        // pra ser chamado em todas requisicoes
        console.log('seja bem vindo ' + nome);
        next()
    }
}

module.exports = saudacao