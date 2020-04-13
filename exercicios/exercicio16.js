// Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
// como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
// numéricos na ordem que foram inseridos.Por exemplo: calculadora(2, ‘+’, 3).A função efetuará a soma de 2 e 3.
//  Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.

function calcula(n1, op, n2) {
    switch (op) {
        case '+':
            console.log(`${n1} + ${n2} = ${n1 + n2}`);
            break;
        case '-':
            console.log(`${n1} - ${n2} = ${n1 - n2}`);
            break;
        case '*':
            console.log(`${n1} * ${n2} = ${n1 * n2}`);
            break;
        case '/':
            console.log(`${n1} / ${n2} = ${n1 / n2}`);
            break;
        default:
            console.log('invalido');
    }
}

calcula(1, '+', 2);
calcula(2, '-', 2);
calcula(3, '*', 3);
calcula(10, '/', 5);