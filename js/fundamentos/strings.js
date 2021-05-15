const escola = "Cod3r";

console.log(escola);
console.log(escola.charAt(4));
console.log(escola.charAt(5)); // retorna vazio (!= null)
console.log(escola.charCodeAt(3)); // valor na tabela unicode/ASCII
console.log(escola.indexOf('3'));

console.log(escola.substring(1)); // a partir do indice 1
console.log(escola.substring(0, 3)); //vai de 0 até 3

//não importa qual aspas
console.log('Escola '.concat(escola).concat("!"));
console.log('Escola ' + escola + "!");
console.log(escola.replace(3, 'e'));

// gera array
console.log('Ana,Maria,Pedro'.split(','));
