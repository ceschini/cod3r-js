// Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente

function potencia(base, expoente) {
    // metodo antigo
    let resultado = Math.pow(base, expoente);
    // metodo novo
    resultado = base ** expoente;

    return resultado;
}

console.log(potencia(2, 3));