// 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function calculaMediaVetor(vec) {
    let total = 0;
    for (i in vec) {
        total += vec[i];
    }
    let media = total / vec.length;
    console.log(`Media do vetor é ${media}`);
}

calculaMediaVetor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 0]);