console.log(soma(3, 4)); // hoisted ?

// function declaration (hoisting ?)
function soma(x, y) {
    return x + y;
}

// function expression
const sub = function (x, y) {
    return x - y;
}
console.log(sub(3, 4));

// named function expression (eh bom para debugar ou logar)
const mult = function mult(x, y) {
    return x * y;
}
console.log(mult(3, 4));