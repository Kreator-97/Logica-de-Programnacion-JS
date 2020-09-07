/*
21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/

console.clear
const button21 = document.getElementById('button-21');
const button22 = document.getElementById('button-22');
const button23 = document.getElementById('button-23');

button21.addEventListener( 'click', ()=> {
    console.clear();
    let str = prompt('Inserte un listado de números separados por comas. Ejemplo: (1, 2, 3, 4, 5)');
    arr = str.split(',');
    arr = arr.map( element => element = parseFloat(element));
    ejercicio21(arr);
    alert('Mira el resultado por consola')
})

button22.addEventListener( 'click', ()=> {
    console.clear();
    let str = prompt('Inserte un listado de números separados por comas. Ejemplo: (1, 2, 3, 4, 5)');
    arr = str.split(',');
    arr = arr.map( element => element = parseFloat(element));
    ejercicio22(arr);
    alert('Mira el resultado por consola');
})

button23.addEventListener( 'click', ()=> {
    console.clear();
    let str = prompt('Inserte un listado de número separador por comas. EjempploL (1, 2, 3, 4, 5)');
    arr = str.split(',');
    arr = arr.map( element => element = parseFloat(element));
    ejercicio23(arr);
    alert('Mira el resultado por consola');
})

// Funciones
// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const ejercicio21 = (arr = undefined)=> {
    if(!arr)                      return console.warn('No ingresaste ningún valor válido')
    if( !(arr instanceof Array) ) return console.error('El valor ingresado no es un arreglo')
    if(arr.length === 0)          return console.warn('El arreglo no puede estar vacío')
    for(let number of arr) {
        if(typeof number !== 'number') return console.error('Los valores ingresados en el arreglo no son números');
        if(isNaN(number))              return console.warn('Los valores ingresadis en el arreglo no son números');
    }
    const cuadrado = arr.map( el => el * el);
    return console.info(cuadrado)
}

//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
const ejercicio22 = (arr = undefined)=> {
    if(!arr)                      return console.warn('El valor ingresado no es válido');
    if( !(arr instanceof Array) ) return console.warn(`El valor ingresado: '${arr}' no es un arreglo`);
    if(arr.length === 0)          return console.warn('El arreglo no puede estar vacío')
    for( let number of arr) {
        if (typeof number !== 'number') return console.warn('Los datos ingresados en el arreglo no son números');
        if (isNaN(number))              return console.warn('Los valores ingresados en el array no son números');
    }
    let arrSorted = [...arr].sort((a,b)=> a - b); 
    console.log({arregloOriginal: arr, min: arrSorted[0], max: arrSorted[arrSorted.length - 1]});
}

// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const ejercicio23 = (arr)=> {
    if( !(arr instanceof Array) ) return console.warn('El valor ingresado no es un arreglo');
    if( arr.length === 0)         return console.warn('El arreglo no puede estar vácio');
    for( let number of arr) {
        if( typeof number !== 'number') return console.warn('Los elementos que están en el no son números');
        if( isNaN(number))              return console.warn('Los elementos que están en el arreglo no son números');
    }
    
    const oddNumbers = arr.filter( el => el % 2 === 0 );
    const evenNumbers = arr.filter( el => el % 2 === 1 );

    console.info({oddNumbers,evenNumbers})
}