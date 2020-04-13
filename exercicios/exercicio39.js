// 39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
// primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
// Faça a troca sem utilizar uma variável auxiliar.

function trocaDePratos(vec1, vec2) {
    vec1 = vec1.concat(vec2);
    for (i in vec1) {
        vec2[i] = vec1.shift();
    }
    console.log(`Novo vetorA: ${vec1}, novo vetorB: ${vec2}`);
}

trocaDePratos([1, 2, 3, 4], [4, 3, 2, 1]);
trocaDePratos([4, 5, 6], [7, 8, 9]);