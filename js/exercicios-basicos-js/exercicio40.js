// Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
// modo que de 0, 0 a 4, 9 seja atribuído o conceito D, de 5, 0 a 6, 9 seja atribuído o conceito C, de 7, 0 a 8, 9 o
// conceito B e de 9, 0 a 10, 0 o conceito A.

function conceitoDasNotas(vec) {
    let conceitos = [];
    for (i in vec) {
        if (vec[i] >= 0 && vec[i] <= 4.9) {
            conceitos.push(`nota ${vec[i]} conceito D`);
        } else if (vec[i] >= 5 && vec[i] <= 6.9) {
            conceitos.push(`nota ${vec[i]} conceito C`);
        } else if (vec[i] >= 7 && vec[i] <= 8.9) {
            conceitos.push(`nota ${vec[i]} conceito B`);
        } else {
            conceitos.push(`nota ${vec[i]} conceito A`);
        }
    }
    console.log(conceitos);
}

conceitoDasNotas([1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10])