const a = 1;
const b = 2;
const c = 3;

// antigo
const obj1 = { a: a, b: b, c: c };
// novo (ES2015)
const obj2 = { a, b, c };
console.log(obj1, obj2);

const nomeAttr = 'nota';
const valorAttr = 7.87;

// antigo
const obj3 = {};
obj3[nomeAttr] = valorAttr;
// novo (ES2015)
const obj4 = { [nomeAttr]: valorAttr };
console.log(obj3, obj4);

const obj5 = {
    // antigo
    funcao1: function () {
        // ...
    },
    // novo (ES2015)
    funcao2() {
        // ...
    }
}
console.log(obj5);
