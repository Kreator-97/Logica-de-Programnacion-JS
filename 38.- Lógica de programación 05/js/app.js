/*
15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/
console.clear
const button15 = document.getElementById('button-15');
const button16 = document.getElementById('button-16');
const button17 = document.getElementById('button-17');

// Eventos
button15.addEventListener( 'click', ()=> {
    console.clear();
    number = prompt('Introduce un número');
    base   = prompt('Introduce la base de conversión (2 | 10)');
    ejercicio15(number, base);
    alert('Mira el resultado por consola');
});

button16.addEventListener( 'click', ()=> {
    console.clear();
    amount = prompt('Introduce el monto total de la compra');
    off = prompt('Introduce el porcentaje de descuento');
    ejercicio16(amount, off);
    alert('Mira el resultado por consola');
});

button17.addEventListener( 'click', ()=> {
    console.clear();
    dateObtained = prompt('Introduce una fecha con el siguiente formato: aaaa/mm/dd');
    ejercicio17(dateObtained);
    alert('Mira el resultado por consola');
});


// Funciones
// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
const ejercicio15 = (number = undefined, base = undefined)=> {
    number = Number(number);
    base = Number(base);
    if(!number) return console.warn('No ingresaste el número a convertir');
    if(!base) return console.warn('No ingresaste la base a convertir');

    if(base === 2) {
        return console.info(`El numero ${number} base ${base} = ${parseInt(number, base)} base 10`);
    } else if(base === 10) {
        return console.info(`El numero ${number} base ${base} = ${number.toString(base)} base 2`);
    } else {
        return console.error('El número base a convertir no es válido');
    }
}

// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const ejercicio16 = (amount = undefined, off = 0)=> {
    amount = Number(amount);
    off = (off === 0) ? '0' : Number(off);
    if(amount <= 0) return console.error('El monto no puede ser negativo o igual a 0')
    if(!amount)     return console.warn('Necesitas ingresar un valor válido');
    if(!off)        return console.warn('El valor descuento ingresado no es válido');
    if(off < 0)     return console.warn('El valor del descuento no puede ser negativo');
    if(off > 100)   return console.warn('El valor del descuento no puede ser más del 100%');
    
    amountOff = ((amount / 100) * off).toFixed(2);
    amount = (amount - amountOff).toFixed(2);
    return console.info(`El total a pagar es: $${amount}, es descuento fue: $${amountOff}`);
}

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
const ejercicio17 = (dateObtained) => {
    if(typeof dateObtained !== 'string') return console.error('El argumento solo puede una cadena de texto con el siguiente formato (aaaa/mm/dd)');

    let yearObtained;
    if(dateObtained.length < 5) {
        yearObtained = new Date(dateObtained).getFullYear() + 1;
    } else {
        yearObtained = new Date(dateObtained).getFullYear()
    }

    let today = new Date().getFullYear();
    let yearDifferences = today - yearObtained;

    return (Math.sign(yearDifferences) === -1)
        ? console.info(`Faltan ${Math.abs(yearDifferences)} años para el ${yearObtained}`)
        : (Math.sign(yearDifferences) === 1)
            ? console.info(`Han pasado ${Math.abs(yearDifferences)} años desde ${yearObtained}`)
            : (Math.sign(yearDifferences) === 0)
                ? console.info('No han transcurrido años desde la fecha indicada')
                : console.error('El valor ingresado no es una fecha válida')
}