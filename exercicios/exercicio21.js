// Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
// considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
// de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
// idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130

function calculaPrecoSaude(idade) {
    if (idade < 0) {
        console.log('Idade inválida');
    }
    else if (idade > 60) {
        console.log('R$160');
    } else if (idade > 30) {
        console.log('R$195');
    } else if (idade > 10) {
        console.log('R$150');
    } else {
        console.log('R$180');
    }
}

calculaPrecoSaude(123);
calculaPrecoSaude(59);
calculaPrecoSaude(25);
calculaPrecoSaude(13);
calculaPrecoSaude(5);
calculaPrecoSaude(-2);