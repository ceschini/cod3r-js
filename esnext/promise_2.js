// // callback hell
// setTimeout(function () {
//     console.log('executando callback 1');


//     setTimeout(function () {
//         console.log('executando callback 2');

//         setTimeout(function () {
//             console.log('executando callback 3');
//         }, 2000)
//     }, 2000)
// }, 2000)

function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log('executando promise');
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then(esperarPor)
    .then(esperarPor)