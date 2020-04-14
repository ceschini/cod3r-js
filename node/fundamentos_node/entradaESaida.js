const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo)

if (anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    // on('data') = depois de digitar algo e apertar enter
    process.stdin.on('data', data => {
        // enter no windows = \r\n no unix = \n
        const nome = data.toString().replace('\r\n', '')

        process.stdout.write(`Fala ${nome}!! \n`)
        process.exit()
    })
}