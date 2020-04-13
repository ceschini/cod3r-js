// 37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
// como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
// bem como a soma dos elementos.

function progressaoAritmetica(n, a1, r) {
    let i = 0;
    let termos = [a1];
    while (i < n) {
        termos.push(termos[i] + r);
        i++;
    }
    console.log(termos);
}

function progressaoGeometrica(n, a1, r) {
    let i = 0;
    let termos = [];
    while (i < n) {
        termos.push(a1 * Math.pow(r, i));
        i++;
    }
    console.log(termos);
}

progressaoAritmetica(6, 1994, 4);
progressaoGeometrica(5, 2, 0.5);