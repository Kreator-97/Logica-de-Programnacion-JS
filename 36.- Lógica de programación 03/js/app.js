/*
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/
console.clear
const button09 = document.getElementById('button-09');
const button10 = document.getElementById('button-10');
const button11V1 = document.getElementById('button-11v1');
const button11V2 = document.getElementById('button-11v2');

// Eventos
button09.addEventListener( 'click', ()=> {
    console.clear();
    ejercicio09();
    alert('Mira el resultado por consola')
});

button10.addEventListener( 'click', ()=> {
    console.clear();
    let number = prompt('Introduce un número a evaluar');
    ejercicio10(number);
    alert('Mira el resultado por consola');
});

button11V1.addEventListener( 'click', ()=> {
    console.clear();
    let factorial = prompt('Coloca el número factorial a obtener');
    ejercicio11V1(factorial);
    alert('Mira el resultado por consola');
});

button11V2.addEventListener( 'click', ()=> {
    console.clear();
    let factorial = prompt('Coloca el número factorial a obtener');
    ejercicio11V2(factorial);
    alert('Mira el resultado por consola');
});

// Funciones
const ejercicio09 = ()=> {
    let number = Math.random() * 100
    number = Math.round(number) + 500;
    console.log(number);
};

const ejercicio10 = (number = undefined)=> {
    number = Number(number);
    if(!number) return console.warn('Es necesario introducir un número');
    if(number) {
        let comparison = String(number);
        comparison = Number(comparison.split('').reverse().join(''));
        if( number === comparison ) {
            console.log(`${number} si es un número capicúo`)
        } else {
            console.log(`${number} no es un número capicúo`)
        }
    }
}

const ejercicio11V1 =(factorial = undefined) => {
    factorial = Number(factorial);
    if(!factorial) return console.warn('Necesitas introducir un número válido');
    if(factorial <= 0) return console.warn('El número necesita ser positivo y mayor a 0');

    let numbers = []
    for(let i = 0; i <= factorial; i++) {
        numbers[i] = i
    }
    numbers.shift();
    return console.log(numbers.reduce( (a,b)=> a * b));
}

const ejercicio11V2 = (factorial) => {
    factorial = Number(factorial);
    if(!factorial) return console.warn('Necesitas introducir un número válido');
    if(factorial <= 0) return console.warn('El número necesita ser positivo y mayor a 0');

    let acc = 1;
    let currentValue;
    for( let limit = 0; limit <= factorial; limit++) {
        if(limit !== 0) {
            currentValue = limit;
            acc = acc * currentValue;
        }
    }
    console.log(acc);
};