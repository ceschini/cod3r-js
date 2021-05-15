// Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
// dia.Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

function categorizaDia(dia) {
    switch (dia) {
        case 2: case 3: case 4: case 5: case 6:
            console.log('Dia util');
            break;
        case 1: case 7:
            console.log('Fim de semana');
            break;
        default:
            console.log('Dia inválido');
    }
}

categorizaDia(1);
categorizaDia(2);
categorizaDia(3);
categorizaDia(40);
categorizaDia(7);