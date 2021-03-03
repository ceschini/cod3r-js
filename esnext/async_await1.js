const { log } = require("console");

function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log('executando promise');
            resolve()
        }, tempo)
    })
}

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function executar() {
    // await extrai valor da promise quando ela finaliza
    let valor = await retornaValorRapido()

    await esperarPor(1500)
    console.log(`async/await ${valor}`);

    await esperarPor(1500)
    console.log(`async/await ${valor + 1}`);

    await esperarPor(1500)
    console.log(`async/await ${valor + 2}`);

    return valor + 3
}

async function executarDeVerdade() {
    const resposta = await executar().then(console.log)
}

async function retornaValorRapido() {
    return 20 // retorna promise com resolve = 20
}

executarDeVerdade()