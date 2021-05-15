function teste1(num) {
    if (num > 7) // {} opcional
        console.log(num); // apenas essa sentenca esta no if
    console.log('final');
}

teste1(6);
teste1(8);

function teste2(num) {
    if (num > 7); // nao usar ';' com as estruturas de controle
    {
        console.log(num);
    }
}

teste2(6);
teste2(8);