// Faça um algoritmo que calcule o fatorial de um número.

function fatorial(n) {
    if (n == 1 || n == 0) {
        console.log(1);
    } else {
        let fatorial = n;
        while (n > 1) {
            fatorial = fatorial * (n - 1);
            n--;
        }
        // return fatorial;
        console.log(fatorial);

    }
}

fatorial(3);
// só funciona chamando uma vez, wtf? fatorial tava sem 'let' (o.O)
fatorial(4);
fatorial(6);