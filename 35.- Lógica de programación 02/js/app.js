/*
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/
console.clear
const button05 = document.getElementById('button-05');
const button06 = document.getElementById('button-06');
const button07 = document.getElementById('button-07');
const button08 = document.getElementById('button-08');

// Eventos
const ejercicio05 = (string = undefined)=> {
    (typeof string !== 'string')
    ? console.warn('Necesitas poner una cadena de texto')
    : (!string)
        ? console.warn('Es necesario introducir una cadena de texto')
        : console.info(string.split('').reverse().join(''))
}

const ejercicio06 = (string = undefined, keyword = undefined)=> {
    if(typeof string !== 'string' || string === '') return console.warn('Es necesario introducir una cadena de texto');
    if(!keyword) return console.warn('Es necesario una palabra clave de búsqueda');
    if(!string.includes(keyword)) return console.info('La palabra clave no tuvo coincidencia')
    if(string.includes(keyword)) {
        let myRe = new RegExp(keyword, 'g');
        let myArray;
        let count = 0;
        while ((myArray = myRe.exec(string)) !== null) {
            count++
        }
        return console.log(count);
    }
}

const ejercicio07 = (string = undefined)=> {
    if(!string) return console.warn('Coloca una cadena de texto valida')
    if(typeof string !== 'string') return console.warn('Es necesario una cadena de texto')
    if(string === ' ') return console.warn('Necesitas introducir un texto válido')

    if(string) {
        string = string.toLowerCase();
        string = string.split(' ').join('');
        let comparison = [...string];
        comparison = comparison.reverse().join('');
        let result = (string === comparison) 
        ? console.log(true + ' La palabra SI en un palindromo') 
        : console.log(false + ' La palabra NO en un palindromo') 
    }
}

const ejercicio08 = (string, searchValue)=> {
    if (!string) return console.warn('Introduce una cadena de texto valida')
    if (!searchValue) return console.warn('Introduce un valor de búsqueda válido')
    if (string) return console.info(string.replace(new RegExp(searchValue, 'gi'), ''))
}