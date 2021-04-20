// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
// a ser pago por aquele lanche.Considere que a cada execução somente será calculado um item.Use o
// comando switch.Crie um caso default para produto não existente.

function calculaValorLanche(cod, qtd) {
    switch (cod) {
        case 100:
            console.log(`R$ ${qtd * 3.00}`);
            break;
        case 200:
            console.log(`R$ ${qtd * 4.00}`);
            break;
        case 300:
            console.log(`R$ ${qtd * 5.50}`);
            break;
        case 400:
            console.log(`R$ ${qtd * 7.50}`);
            break;
        case 500:
            console.log(`R$ ${qtd * 3.50}`);
            break;
        case 600:
            console.log(`R$ ${qtd * 2.80}`);
            break;
        default:
            console.log('Código de produto inválido');
    }
}

calculaValorLanche(100, 2);
calculaValorLanche(200, 3);
calculaValorLanche(300, 4);
calculaValorLanche(400, 1);
calculaValorLanche(500, 6);
calculaValorLanche(600, 2);
calculaValorLanche(666, 69);