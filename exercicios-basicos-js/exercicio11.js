// As regras para o cálculo dos anos bissextos são as seguintes:
// De 4 em 4 anos é ano bissexto;
// De 100 em 100 anos não é ano bissexto;
// De 400 em 400 anos é ano bissexto;
// Prevalecem as últimas regras sobre as primeiras.
// Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
// mensagem e retornando true ou false.

function ehBissexto(ano) {
    if (ano % 400 == 0) {
        console.log('É bissexto');
        return true;
    } else if (ano % 100 == 0) {
        console.log('Não é bissexto');
        return true;
    } else if (ano % 4 == 0) {
        console.log('É bissexto');
        return true;
    }
}

ehBissexto(400);
ehBissexto(500);
ehBissexto(800);
ehBissexto(1000);
ehBissexto(1200);