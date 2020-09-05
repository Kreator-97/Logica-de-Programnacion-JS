/*
18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/

console.clear
const button18 = document.getElementById('button-18');
const button19 = document.getElementById('button-19');
const button20 = document.getElementById('button-20');

// Eventos
button18.addEventListener( 'click', ()=> {
    console.clear();
    let string = prompt('Ingresa una cadena de texto')
    ejercicio18(string);
    alert('Mira el resultado por consola')
})

button19.addEventListener( 'click', ()=> {
    console.clear();
    let name = prompt('Introduce un nombre')
    ejercicio19(name);
    alert('Mira el resultado por consola')
})

button20.addEventListener( 'click', ()=> {
    console.clear();
    let email = prompt('Introduce un correo electrónico válido')
    ejercicio20(email);
    alert('Mira el resultado por consola')
})

// Funciones
// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const ejercicio18 = (string = "" )=> {
    if(!string) return console.warn('No ingresaste una cadena de texto válida');
    if(typeof string !== 'string') return console.warn(`El valor ${string} ingresado no es una cadena de texto`);

    let vocales = 0,
        consonantes = 0;
    for( let char of string) {
        if(/[aeiouáéíóúü]/gi.test(char)) {
            vocales++;
        }
        if(/[bcdfghjklmnpqrstvwxyz]/gi.test(char)) {
            consonantes++;
        }
    }
    console.log(`La cadena de texto es: ${string}`)
    console.log(`El número de vocales es: ${vocales}`);
    console.log(`El número de consonantes es: ${consonantes}`);
}

// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
const ejercicio19 = (nombre = "")=> {
    if(!nombre) return console.warn('No ingresaste un nombre');
    if(typeof nombre !== "string") return console.error(`El valor ${nombre} ingresado no es una cadena de texto`);

    let expReg = /^[a-zñáéíóúü\s]+$/gi.test(nombre);

    return (expReg)
        ? console.info(`%c${nombre} es un nombre válido`, 'color: hsl(120, 70%, 70%);')
        : console.info(`%c${nombre} no es un nombre válido`, 'color: hsl(0, 70%, 70%);')
}

// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
const ejercicio20 = (email = undefined)=> {
    if(typeof email === 'undefined') return console.warn('Es necesario introducir un correo electrónico');
    if(!email || typeof email !== 'string') return console.warn('El valor introducido no es válido');


    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/gi.test(email)

    return (expReg)
        ? console.info(`%c${email} si es un correo válido`, 'color: hsla(120, 80%, 70%)')
        : console.info(`%c${email} no es un correo válido`, 'color: hsla(0 ,80%, 70%);')
}