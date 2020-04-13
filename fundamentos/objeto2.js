console.log(typeof Object);
console.log(typeof new Object);

const Cliente = function () { }
console.log(typeof Cliente);
console.log(typeof new Cliente);

class Produto { } // ES 20125 (ES6) -> class = function (syntax sugar)
console.log(typeof Produto);
console.log(typeof new Produto());
