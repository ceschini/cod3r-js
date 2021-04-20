// 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
// crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
// quantos anos isso acontecerá.Utilize centímetros para as unidades de medida.

function willIGrowUp(altura, taxaCrescimento) {
    if (altura[0] < altura[1]) {
        let alturaAtual = altura[0];
        let ano = 0;
        while (alturaAtual < altura[1]) {
            alturaAtual += taxaCrescimento[0];
            ano++;
        }
        console.log(`Criança 1 passará criança 2 em ${ano} anos, com ${alturaAtual}cm`);
    } else if (altura[1] < altura[0]) {
        let alturaAtual = altura[1];
        let ano = 0;
        while (alturaAtual < altura[0]) {
            alturaAtual += taxaCrescimento[1];
            ano++;
        }
        console.log(`Criança 2 passará criança 1 em ${ano} anos, com ${alturaAtual}cm`);
    }
}

willIGrowUp([130, 180], [8, 5]);
willIGrowUp([200, 130], [3, 10]);