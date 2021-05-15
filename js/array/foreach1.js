const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// para obter indice precisa receber elemento como param na func
aprovados.forEach(function (elemento, indice, array) {
    console.log(`${indice + 1}) ${elemento}`)
    console.log(array);
})

// com arrow
aprovados.forEach(nome => console.log(nome))

// com funcao externa
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)