// Escreva um algoritmo que leia o código de um aluno e suas três notas.Calcule a média ponderada do
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
// "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

function calculaMediaPonderada(cod, nota1, nota2, nota3) {
    if (cod < 0) return false;
    let media = (nota1 + nota2 + nota3) / 3;
    if (media >= 5) {
        console.log(`Aluno ${cod}, com notas ${nota1}, ${nota2} e ${nota3} você foi aprovado com media ${media} :)`);
    } else {
        console.log(`Aluno ${cod}, com notas ${nota1}, ${nota2} e ${nota3} você foi reprovado com media ${media} :(`);
    }
}

calculaMediaPonderada(666, 1, 2, 3);
calculaMediaPonderada(256, 10, 10, 10);