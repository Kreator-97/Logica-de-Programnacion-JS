/*
12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/
console.clear
const button12 = document.getElementById('button-12');
const button13 = document.getElementById('button-13');
const button14 = document.getElementById('button-14');

// Eventos
button12.addEventListener( 'click', ()=> {
    console.clear();
    let number = prompt('Introduce un número positivo que no sea 0 o 1');
    ejercicio12(number);
    alert('Mira el resultado por consola');
});

button13.addEventListener( 'click', ()=> {
    console.clear();
    let number = prompt('Introduce cualquier número que no sea 0');
    ejercicio13(number);
    alert('Mira el resultado por consola');
});

button14.addEventListener( 'click', ()=> {
    console.clear();
    let deg = prompt('Proporciona los grados que deseas convertir');
    let unit = prompt('Proporciona la unidad de conversion ("c" = celsius | "f" = fahrenheit)');
    ejercicio14(deg, unit);
    alert('Mira el resultado por consola');
});

// Funciones
// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const ejercicio12 = (number = undefined)=> {
    if(typeof number === 'undefined') return console.warn('Es necesario introducir un valor')

    number = Number(number)
    if(!number) return console.warn('El valor ingresado no es un número');
    if(number <= 1) return console.warn('El número debe ser positivo y mayor que 1');

    isPrimeNumber = true;

    for(let i = 2; i < number; i++) {
        if(number % i === 0) {
            isPrimeNumber = false;
            break;
        }
    }

    return (isPrimeNumber) 
        ? console.log(`El número ${number} si es primo`) 
        : console.log(`El número ${number} no es primo`)
}

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const ejercicio13 = (number = undefined)=> {
    number = Number(number);
    if(!number) return console.warn('Necesitas introducir una número válido');
    if(number % 1 !== 0) return console.warn('El número proporcionado debe de ser entero');
    
    return (number % 2 === 0 )
        ? console.info(`El número proporcionado ${number} es un número par`)
        : console.info(`El número proporcionado ${number} es un número impar`)
}

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
const ejercicio14 = (deg = undefined, unit = undefined)=> {
    let degConverted = (deg === 0 || deg === '0') ? '0' : deg * 1;
    console.log(degConverted)
    if(!degConverted) return console.warn(`El valor introducido "${deg}" no es válido`);
    if(unit) {
        unit.toLowerCase()
    } else {
        return console.warn('Es necesario definir la unidad de conversion ("c" = celsius | "f" = fahrenheit)')
    }

    switch(unit) {
        case 'c':
            degConverted = ((degConverted * 9) / 5) + 32;
            degConverted = degConverted.toFixed(2);
            console.log(`${deg}° C equivalen a ${degConverted}° F`);
            break;
        case 'f':
            degConverted = ((degConverted - 32) * 5) / 9;
            degConverted = degConverted.toFixed(2);
            console.log(`${deg}° F equivalen a ${degConverted}° C`);
            break;
        default:
            console.warn('El segundo argumento solo puede ser ("c" = celsius | "f" = fahrenheit)')
    }
}
