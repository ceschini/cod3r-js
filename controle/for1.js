console.log('Com while:');
let contador = 1;
while (contador <= 10) {
    console.log(`contador = ${contador++}`);
}

console.log('Com for:');
for (let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`);
}
console.log('For com array:');

const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for (let i = 0; i < notas.length; i++) {
    console.log(`Nota ${i}: ${notas[i]}`);
}