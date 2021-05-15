const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); // remove ultimo elemento
console.log(pilotos);
pilotos.push('Verstappen'); // adiciona no fim
console.log(pilotos);

pilotos.shift(); //remove primeiro elemento
console.log(pilotos);
pilotos.unshift('Hamilton'); // adiciona no inicio do array
console.log(pilotos);

// splice pode adicionar e remover elementos

// a partir do indice 2 remover 0 adicionar Bottas Masssa
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

// a partir do indice 3 remover 1
pilotos.splice(3, 1);
console.log(pilotos);

// gera novo array a partir do indice 2 (com ele incluso)
const algunsPilotos1 = pilotos.slice(2); // nao modifica pilotos
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // a partir do 1 até o 4
console.log(algunsPilotos2);