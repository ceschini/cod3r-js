// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.. 
// (Neste exemplo deve - se abstrair as condições matemáticas de existência de um triângulo).

function classificaTriangulo(a, b, c) {
    if (a == b && b == c) {
        console.log('É Equilátero');
    } else if (a == b || a == c || b == c) {
        console.log('É Isóceles');
    } else {
        console.log('É Escaleno');
    }
}

classificaTriangulo(2, 2, 2);
classificaTriangulo(2, 2, 3);
classificaTriangulo(1, 4, 3);