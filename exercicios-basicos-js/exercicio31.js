// 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

function contaNegativos(vec) {
    count = 0;
    for (i in vec) {
        if (vec[i] < 0) {
            count++;
        }
    }
    console.log(`Foram encontrados ${count} numeros negativos`);
}
contaNegativos([1, 2, 3, 4, -1, -2, 3, 4, 5, -6, -6, -7]);