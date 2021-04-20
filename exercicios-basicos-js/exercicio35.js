// 35) Crie dois vetores chamados vetorPilha e vetorAdiciona.Inicialmente, o vetorPilha conterá cinco elementos
// inteiros: [1, 2, 3, 4, 5].Você deverá adicionar os valores contidos no vetorAdiciona[6, 7, 8, 9, 10] ao vetor pilha
// e mostrá - los no console.É importante lembrar que o método Push retorna somente o tamanho do Vetor.Ao
// final das operações imprima os vetores no console.

function adicionaVetor(vec1, vec2) {
    for (i in vec2) {
        vec1.push(vec2[i]);
    }
    console.log(vec1);
    console.log(vec2);
}
adicionaVetor([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);