// 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo[10, 20](repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
// deles estão fora do intervalo, escrevendo estas informações.

function estaNoIntervalo(victor) {
    let t = 0;
    let f = 0;
    for (i in victor) {
        if (victor[i] >= 10 && victor[i] <= 20) {
            t++;
        } else {
            f++;
        }
    }
    console.log(`${t} estão no intervalo e ${f} não estão`);
}

estaNoIntervalo([5, 10, 15, 16, 17, 18, 21, 30, 40]);