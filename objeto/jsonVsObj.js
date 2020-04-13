const obj1 = { a: 1, b: 2, c: 3, soma() { return a + b + c } };
console.log(JSON.stringify(obj1));
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'));

const obj2 = {
    a: 1.9,
    b: 'string',
    c: {
        d: 1,
        e: 2
    },
}

console.log(JSON.stringify(obj2));
console.log(JSON.parse('{"a":1.7, "b": "string", "c": true, "d":{}, "e":[]}'));