// Pedro joga N jogos de basquete por temporada.Para saber como está ele está progredindo, ele mantém
// registro de todos os as pontuações feitas por jogo.Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho.Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê - la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo)

function analisaDesempenho(lista) {
    let vetor = lista.split(' ');

    let melhor = vetor[0];
    let contadorMelhor = 0;
    let pior = vetor[0];
    let posicaoPior = 0;
    for (let i = 0; i < vetor.length; i++) {
        numero = Number(vetor[i]);
        if (numero > melhor) {
            melhor = numero;
            contadorMelhor++;
        } else if (numero < pior) {
            pior = numero;
            posicaoPior = i + 1;
        }
    }
    return [contadorMelhor, posicaoPior];
}

console.log(analisaDesempenho('30 40 20 4 51 25 42 38 56 0'));
