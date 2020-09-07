/*
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/

console.clear
const button24 = document.getElementById('button-24');
const button25 = document.getElementById('button-25');
const button26 = document.getElementById('button-26');

button24.addEventListener( 'click', ()=> {
    console.clear();
    let str = prompt('Introduce un listado de números separados por comas. Ejemplo: 1,2,3,4,5');
    if(!str) return console.error('No has ingresado ningún valor')
    arr = str.split(',').map( el => parseFloat(el));
    ejercicio24(arr);
    alert('Mira el resultado por consola');
})

button25.addEventListener( 'click', ()=> {
    console.clear();
    let str = prompt('Introduce un listado de elementos separados por comas. Ejemplo: 1, 2, 3, a, b, c, hola');
    if(!str) return console.error('No has ingresado ningún valor')
    arr = str.split(',');
    ejercicio25(arr);
    alert('Mira el resultado por consola');
})

button26.addEventListener( 'click', ()=> {
    console.clear();
    let str = prompt('Introduce un listado de números separados por comas. Ejemplo: 1,2,3,4,5');
    if(!str) return console.error('No has ingresado ningún valor')
    arr = str.split(',').map( el => parseFloat(el));
    ejercicio26(arr);
    alert('Mira el resultado por consola');
})

// Funciones

// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
const ejercicio24 = (arr = undefined)=> {
    if(!arr)                      return console.warn(`El parámetro de la función no es un valor válido`)
    if( !(arr instanceof Array) ) return console.error('El elemento introducido no es un arreglo');
    if( arr.length === 0 )        return console.warn('El arreglo no puede estar vacío')
    for( number of arr ) {
        if(typeof number !== 'number') return console.warn('Los elementos dentro del arreglo no son números');
        if(isNaN(number))              return console.warn('Los elementos dentro del arreglo no son números');
    }

    const sortByAscending  = [...arr].sort( (a,b)=> a - b );
    const sortByDescending = [...arr].sort( (a,b)=> b - a );
    return console.log( {arregloOriginal: arr, ordenadoAscendente: sortByAscending, ordenadoDescendente: sortByDescending});
}

// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
const ejercicio25 = (arr = undefined)=> {
    if(!arr)                      return console.warn('El parámetro de la función no es un valor válido')
    if( !(arr instanceof Array) ) return console.error('El elemento introducido no es un arreglo');
    if( arr.length === 0 )        return console.warn('El arreglo no puede estar vacío')
    arr = arr.map( el => (typeof el === 'string') ? el.trim() : el)
    console.log(arr);
    const newArr = new Set(arr);
    return console.info(newArr);
}

// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
const ejercicio26 = (arr = undefined)=> {
    if(!arr)                      return console.warn('El parámetro de la función no es un valor válido');
    if( !(arr instanceof Array) ) return console.error('El elemento introducido no es un arreglo');
    if(arr.length === 0)          return console.warn('El arreglo no puede estar vacío');
    for(let number of arr) {
        if(typeof number !== 'number') return console.warn('Los elementos dentro del arreglo no son números');
        if(isNaN(number))              return console.warn('Los elementos del arreglo no son números');
    }
    let average = arr.reduce( (a, b) => a + b) / arr.length;
    console.log('El promedio es: ', average);
}