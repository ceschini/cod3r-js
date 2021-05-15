console.log('a = ', a);
var a = 2; // declaracao vai ser movida para cima (hoisting)
console.log('a = ', a);

// o interpretador faz:
var a;
console.log('a = ', a);
a = 2;
console.log('a = ', a);

console.log('b = ', b);
let b = 2; // ReferenceError
