/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/
const button01 = document.getElementById('button-01');
const button02 = document.getElementById('button-02');
const button03 = document.getElementById('button-03');
const button04 = document.getElementById('button-04');

// Eventos
button01.addEventListener('click', ()=> {
    let value = prompt('Ingrese una cadena de texto');
    ejercicio01(value);
})

button02.addEventListener('click', ()=> {
    let string   = prompt('Ingrese una cadena de texto');
    let quantity = prompt('Ingrese la cantidad a recortar');
    ejercicio02(string, quantity);
})

button03.addEventListener('click', ()=> {
    let string    = prompt('Ingrese una cadena de texto');
    let separator = prompt('Ingrese el caracter separador (por defecto " ")');
    separator = (separator) ? separator : ' '; 
    ejercicio03(string, separator);
})

button04.addEventListener('click', ()=> {
    let string      = prompt('Ingrese una cadena de texto');
    let repeatValue = prompt('Ingrese la cantidad de repeticiones del texto');
    ejercicio04(string, repeatValue);
})


// Funciones
const ejercicio01 = (string)=> {
    if(typeof string != 'string') {
        console.warn(`Es necesario una cadena de texto`);
        alert('Es necesario una cadena de texto');
    } else {
        console.log(`El número de caracteres que contiene es: ${string.length}`);
        return alert(`El número de caracteres que contiene es: ${string.length}`);
    }
}

const ejercicio02 = (string, quantity)=> {
    if(!string) {
        console.warn(`Necesitas una cadena de texto válida`);
        alert('Necesitas una cadena de texto válida');   
    } else {
        if(typeof string != 'string') {
            console.warn(`Es necesario una cadena de texto`);
            alert('Es necesario una cadena de texto');
        } else {
            quantity = quantity * 1;
            if(quantity && typeof quantity === 'number') {
                console.log(`El resultado del texto recortado es: ${string.substr(0,quantity)}`);
                return alert(`El resultado del texto recortado es: ${string.substr(0,quantity)}`);
            } else {
                console.warn(`Necesitas un número valido o que no sea 0`);
                alert(`Necesitas un número valido o que no sea 0`);
            }
        }
    }
}

const ejercicio03 = (string, separator)=> {
    if(typeof string != 'string') {
        console.warn('Es necesario una cadena de texto');
        return alert('Es necesario una cadena de texto');
    } else if(string) {
        result = string.split(separator);
        console.log(result);
        return alert('Mira por consola el arreglo devuelto');
    } else {
        console.warn('Coloca una cadena de texto que no este vacía');
        return alert('Coloca una cadena de texto que no este vacía');
    };
}

const ejercicio04 = (string, repeatValue)=> {
    if(string){
        string = string + ' ';
        repeatValue = repeatValue * 1;
        if(repeatValue) {
            console.log(string.repeat(repeatValue));
            return alert(string.repeat(repeatValue));
        } else {
            console.warn('El número de repeticiones proporcionado no es válido');
            return alert('El número de repeticiones proporcionado no es válido');
        }
    } else {
        console.warn('Necesitas una cadena de texto valida');
        return alert('Necesitas una cadena de texto valida');
    }
}