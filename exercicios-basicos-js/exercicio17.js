// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário.Use a estrutura switch e faça um caso default que indique que o plano é inválido.

function calculaSalario(plano, salario) {
    switch (plano) {
        case 'a':
            console.log('Novo salário: ' + (salario + (salario * 0.10)));
            break;
        case 'b':
            console.log('Novo salário: ' + (salario + (salario * 0.15)));
            break;
        case 'c':
            console.log('Novo salário: ' + (salario + (salario * 0.2)));
            break;
        default:
            console.log('Plano inválido');
    }
}

calculaSalario('a', 1000);
calculaSalario('b', 2000);
calculaSalario('c', 3000);
calculaSalario('d', 2030);