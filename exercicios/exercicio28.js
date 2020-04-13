// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function ehParOuImpar(victor) {
    let par = 0;
    let impar = 0;
    for (i in victor) {
        if (victor[i] % 2 == 0) {
            par++;
        } else {
            impar++;
        }
    }
    console.log(`${par} são pares e ${impar} são ímpares`);
}

ehParOuImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);