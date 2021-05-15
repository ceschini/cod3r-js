// Criar uma função para calcular o valor a ser pago de anuidade de uma associação.A função recebe como
// parâmetro um inteiro que representa o mês(1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade.A
// anuidade deve ser paga no mês de janeiro.Por mês, é cobrado 5 % de juros(sob o regime de juros
// compostos).O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

function calculaAnuidade(mes, valor) {
    if (mes == 1) {
        return valor;
    } else {
        return (valor * ((1 + (5 / 100)) ** (mes - 1))).toFixed(2)
    }
}

console.log(calculaAnuidade(1, 1200));
console.log(calculaAnuidade(4, 100));
