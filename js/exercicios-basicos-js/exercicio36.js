// 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
// inteiro.Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
// elemento pelo número passado como parâmetro.A segunda função fará o mesmo da primeira se e somente se
// o valor do elemento for maior que 5.

function multiplicaVetorPor(vec, int) {
    let result = [];
    for (i in vec) {
        result[i] = vec[i] * int;
    }
    return result;
}

function bla(vec, int) {
    let result = [];
    for (i in vec) {
        if (vec[i] > 5) {
            result.push(vec[i] * int);
        }
    }
    return result;
}

let vec = multiplicaVetorPor([1, 2, 3, 4, 5], 5);
console.log(vec);

vec = bla([1, 2, 3, 4, 5, 6, 7, 8], 5);
console.log(vec);
