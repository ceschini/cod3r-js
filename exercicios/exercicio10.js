// Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
// ou false.

function ehDivisivelPor3(int) {
    if (int % 3 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(ehDivisivelPor3(6));
