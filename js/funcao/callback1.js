const fabricantes = ['Mercedes', 'Audi', 'BMW'];

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

// forEach chama a funcao callback uma vez p/ cada elemento do array  
fabricantes.forEach(imprimir);
fabricantes.forEach(fabricante => console.log(fabricante));