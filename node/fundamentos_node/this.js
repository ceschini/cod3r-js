console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports);

function logThis() {
    console.log('Dentro de uma função:');
    console.log(this === exports);
    console.log(this === module.exports);
    // dentro da func aponta global
    console.log(this === global);
}

logThis()