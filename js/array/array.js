console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados);
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); // outras linguagens = indexOutofBounds

aprovados[3] = 'Paulo';
aprovados.push('Abia');
console.log(aprovados.length); // tamanho do array

aprovados[9] = 'Rafael';
console.log(aprovados);
console.log(aprovados.length);
console.log(aprovados[8] === undefined);
aprovados.sort(); // ordena array (altera)
console.log(aprovados);

delete aprovados[1];
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
// a partir do indice 1, remove 2 elementos e substitui por El1 e EL2
aprovados.splice(1, 2, `Elemento1`, 'Elemento2');
console.log(aprovados);
