// Desenvolva uma função JavaScript para
// que ela receba um valor como 0.30000000000000004 e retorne R$0,30(observe a vírgula e o ponto)

function converteReais(dinheiro) {
    return `R$ ${dinheiro.toFixed(2).toString().replace('.', ',')}`;
}

console.log(converteReais(0.300000003));
console.log(converteReais(0.312321731273));