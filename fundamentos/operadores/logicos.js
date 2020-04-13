function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2; //xor
    const manterSaudavel = !comprarSorvete;
    return {
        comprarSorvete: comprarSorvete,
        comprarTv50: comprarTv50,
        comprarTv32, // ES2015
        manterSaudavel // ES2015
    };
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));