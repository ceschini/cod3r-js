// Let tem escopo local, de bloco
let numero = 1;
{
    let numero = 2
    console.log('dentro = ', numero);
}
console.log('fora = ', numero);
