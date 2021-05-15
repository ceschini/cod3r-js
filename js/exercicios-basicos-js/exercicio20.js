// Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
// Seu programa deve mostrar apenas as notas utilizadas.Por exemplo, ao solicitar R$18, o programa deve
// informar apenas a seguinte informação(note que não foram exibidas informações sobre as demais cédulas): 1
// nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

function notasParaValor(valor) {
    let resultado = '';
    let notas100 = 0;
    let notas50 = 0;
    let notas10 = 0;
    let notas5 = 0;
    let notas1 = 0;
    while (valor > 0) {
        if (valor >= 100) {
            valor -= 100;
            notas100++;
        } else if (valor >= 50) {
            valor -= 50;
            notas50++;
        } else if (valor >= 10) {
            valor -= 10;
            notas10++;
        } else if (valor >= 5) {
            valor -= 5;
            notas5++;
        } else {
            valor -= 1;
            notas1++;
        }
    }
    if (notas100 != 0) {
        resultado = resultado.concat(`${notas100} nota(s) de R$ 100. `)
    }
    if (notas50 != 0) {
        resultado = resultado.concat(`${notas50} nota(s) de R$ 50. `)
    }
    if (notas10 != 0) {
        resultado = resultado.concat(`${notas10} nota(s) de R$ 10. `)
    }
    if (notas5 != 0) {
        resultado = resultado.concat(`${notas5} nota(s) de R$ 5. `)
    }
    if (notas1 != 0) {
        resultado = resultado.concat(`${notas1} nota(s) de R$ 1. `)
    }
    console.log(resultado);
}

notasParaValor(69);