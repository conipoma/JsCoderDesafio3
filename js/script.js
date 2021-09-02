// CONSIGNA 1 -> Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado.

// NUMBER -> función que engloba tanto el parseInt como el parseFloat en una
 
// let numeroUsuario = parseInt(prompt("Ingrese un numero"));
// let resultadoSuma;

// for(i = 0; i <= 4; i++) {
//     resultadoSuma = numeroUsuario + 20;
//     console.log(numeroUsuario + ' + 20 = ' + resultadoSuma);
//     numeroUsuario += 20;
// }


// CONSIGNA 2 -> Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.

// let nombre = "";
// let contar = 0;

// alert('Introduzca un listado de nombres uno por vez. Cuando desee salir del programa escriba "ESC"\n \n');

// nombre = prompt('Introduzca un nombre');

// while(nombre == null || nombre == "") {
    
//     nombre = prompt("Ingrese un nombre");
// };

// ponemos en toUpperCase() aca y no en el prompt porque sino hubiera dato el null da error con el método

// nombre = nombre.toUpperCase();

// while (nombre != "ESC") {
//     contar ++;
//     console.log(contar + '- ' + nombre);
//     nombre = prompt('Introduzca un nombre');
    
//     while(nombre == null || nombre == ""){
//         nombre = prompt('Introduzca un nombre');
//     }
//     nombre = nombre.toUpperCase();
// };


// CONSIGNA 3 -> Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.

// let numero = 0;
// let contar = 0;

// numero = prompt('Ingrese un número');

// while(numero == '' || numero == null || isNaN(numero) || numero <= 0) {
//     numero = parseInt(prompt('Ingrese un número'));
// }

// while(contar < numero) {
//     console.log((contar + 1) + ' - Hola');
//     contar += 1;
// }



