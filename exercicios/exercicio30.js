// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

function mathMaxMin(vec) {
    let max = vec[0];
    let min = vec[0];
    for (i in vec) {
        if (vec[i] > max) {
            max = vec[i];
        }
        if (vec[i] < min) {
            min = vec[i];
        }
    }
    console.log(`Maior valor foi ${max} e o menor foi ${min}`);
}
mathMaxMin([1, 2, 3, 4, 10, 15, 3, -1, 400, 323, 1000]);